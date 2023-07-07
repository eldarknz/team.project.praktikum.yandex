import { AuthForm, AuthFormProps } from './AuthForm';
import { validate } from '@service/Validate';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve('hey'),
  }),
);

const renderAuthForm = (props: AuthFormProps) => {
  return render(
    <MemoryRouter>
      <AuthForm {...props} />
    </MemoryRouter>,
  );
};

const mockControllers = {
  auth: {
    signin: jest.fn(),
    signup: jest.fn(),
  },
};

jest.mock('@core/ControllersContext', () => ({
  useControllers: jest.fn(() => mockControllers),
}));

describe('SignIn', () => {
  test('renders AuthForm correctly with signin type', async () => {
    renderAuthForm({ authType: 'signin' });

    expect(screen.getByText('Авторизация')).toBeDefined();
    expect(screen.getByLabelText('Логин')).toBeDefined();
    expect(screen.getByLabelText('Пароль')).toBeDefined();
    expect(screen.getByText('Войти')).toBeDefined();
    expect(screen.getByText('Еще не зарегистрированы?')).toBeDefined();
  });

  test('displays error message on incorrect input', async () => {
    renderAuthForm({ authType: 'signin' });

    fireEvent.change(screen.getByLabelText('Логин'), {
      target: { value: '1' },
    });

    expect(screen.getByText('Кажется, вы неверно ввели логин :(')).toBeDefined();
  });

  test('sends a request with the entered signin data', async () => {
    renderAuthForm({ authType: 'signin' });

    fireEvent.change(screen.getByLabelText('Логин'), {
      target: { value: 'testuser' },
    });
    fireEvent.change(screen.getByLabelText('Пароль'), {
      target: { value: 'Password123' },
    });

    fireEvent.click(screen.getByRole('button'));

    await waitFor(async () => {
      expect(mockControllers.auth.signin).toHaveBeenCalledWith({
        values: {
          login: 'testuser',
          password: 'Password123',
        },
        onSuccess: expect.any(Function),
        onError: expect.any(Function),
      });
    });
  });
});

describe('SignUp', () => {
  test('renders AuthForm correctly with signup type', async () => {
    renderAuthForm({ authType: 'signup' });

    expect(screen.getByText('Регистрация')).toBeDefined();
    expect(screen.getByLabelText('Почта')).toBeDefined();
    expect(screen.getByLabelText('Логин')).toBeDefined();
    expect(screen.getByLabelText('Имя')).toBeDefined();
    expect(screen.getByLabelText('Фамилия')).toBeDefined();
    expect(screen.getByLabelText('Телефон')).toBeDefined();
    expect(screen.getByLabelText('Пароль')).toBeDefined();
    expect(screen.getByLabelText('Еще раз пароль')).toBeDefined();
    expect(screen.getByText('Зарегистрироваться')).toBeDefined();
    expect(screen.getByText('Уже есть аккаунт?')).toBeDefined();
  });

  test('displays error message on incorrect input', async () => {
    renderAuthForm({ authType: 'signup' });

    fireEvent.change(screen.getByLabelText('Почта'), {
      target: { value: '1' },
    });
    fireEvent.change(screen.getByLabelText('Логин'), {
      target: { value: '1' },
    });
    fireEvent.change(screen.getByLabelText('Имя'), {
      target: { value: '1' },
    });
    fireEvent.change(screen.getByLabelText('Фамилия'), {
      target: { value: '1' },
    });
    fireEvent.change(screen.getByLabelText('Телефон'), {
      target: { value: '1' },
    });
    fireEvent.change(screen.getByLabelText('Пароль'), {
      target: { value: '123' },
    });
    fireEvent.change(screen.getByLabelText('Еще раз пароль'), {
      target: { value: 'abc' },
    });

    expect(screen.getByText(validate.errorMessages.email)).toBeDefined();
    expect(screen.getByText(validate.errorMessages.login)).toBeDefined();
    expect(screen.queryAllByText(validate.errorMessages.name).length).toBe(2);
    expect(screen.getByText(validate.errorMessages.phone)).toBeDefined();
    expect(screen.getByText(validate.errorMessages.password)).toBeDefined();
    expect(screen.getByText('Пароли не совпадают')).toBeDefined();
  });

  test('sends a request with the entered signup data', async () => {
    renderAuthForm({ authType: 'signup' });

    fireEvent.change(screen.getByLabelText('Почта'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Логин'), {
      target: { value: 'testuser' },
    });
    fireEvent.change(screen.getByLabelText('Имя'), {
      target: { value: 'Test' },
    });
    fireEvent.change(screen.getByLabelText('Фамилия'), {
      target: { value: 'Test' },
    });
    fireEvent.change(screen.getByLabelText('Телефон'), {
      target: { value: '1234567890' },
    });
    fireEvent.change(screen.getByLabelText('Пароль'), {
      target: { value: 'Testpassword1' },
    });
    fireEvent.change(screen.getByLabelText('Еще раз пароль'), {
      target: { value: '' },
    });

    fireEvent.click(screen.getByRole('button'));

    await waitFor(async () => {
      expect(mockControllers.auth.signup).toHaveBeenCalledWith({
        values: {
          email: 'test@example.com',
          login: 'testuser',
          first_name: 'Test',
          second_name: 'Test',
          phone: '1234567890',
          password: 'Testpassword1',
          password_confirm: '',
        },
        onSuccess: expect.any(Function),
        onError: expect.any(Function),
      });
    });
  });
});
