import {
  AuthForm,
  AuthFormProps,
} from './AuthForm';
import { validate } from '@service/Validate';
import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve('hey'),
  })
);

const renderAuthForm = (props: AuthFormProps) => {
  return render(
    <MemoryRouter>
      <AuthForm {...props} />
    </MemoryRouter>
  );
};

describe('SignIn', () => {
  test('renders AuthForm correctly with signin type', async () => {
    renderAuthForm({ authType: 'signin' });

    expect(
      screen.getByText('Авторизация')
    ).toBeDefined();
    expect(
      screen.getByLabelText('Логин')
    ).toBeDefined();
    expect(
      screen.getByLabelText('Пароль')
    ).toBeDefined();
    expect(
      screen.getByText('Войти')
    ).toBeDefined();
    expect(
      screen.getByText('Еще не зарегистрированы?')
    ).toBeDefined();
  });

  test('displays error message on incorrect input', async () => {
    renderAuthForm({ authType: 'signin' });

    fireEvent.change(
      screen.getByLabelText('Логин'),
      {
        target: { value: '1' },
      }
    );

    expect(
      screen.getByText(
        'Кажется, вы неверно ввели логин :('
      )
    ).toBeDefined();
  });
});

describe('SignUp', () => {
  test('renders AuthForm correctly with signup type', async () => {
    renderAuthForm({ authType: 'signup' });

    expect(
      screen.getByText('Регистрация')
    ).toBeDefined();
    expect(
      screen.getByLabelText('Почта')
    ).toBeDefined();
    expect(
      screen.getByLabelText('Логин')
    ).toBeDefined();
    expect(
      screen.getByLabelText('Имя')
    ).toBeDefined();
    expect(
      screen.getByLabelText('Фамилия')
    ).toBeDefined();
    expect(
      screen.getByLabelText('Телефон')
    ).toBeDefined();
    expect(
      screen.getByLabelText('Пароль')
    ).toBeDefined();
    expect(
      screen.getByLabelText('Еще раз пароль')
    ).toBeDefined();
    expect(
      screen.getByText('Зарегистрироваться')
    ).toBeDefined();
    expect(
      screen.getByText('Уже есть аккаунт?')
    ).toBeDefined();
  });

  test('displays error message on incorrect input', async () => {
    renderAuthForm({ authType: 'signup' });

    fireEvent.change(
      screen.getByLabelText('Почта'),
      {
        target: { value: '1' },
      }
    );
    fireEvent.change(
      screen.getByLabelText('Логин'),
      {
        target: { value: '1' },
      }
    );
    fireEvent.change(
      screen.getByLabelText('Имя'),
      {
        target: { value: '1' },
      }
    );
    fireEvent.change(
      screen.getByLabelText('Фамилия'),
      {
        target: { value: '1' },
      }
    );
    fireEvent.change(
      screen.getByLabelText('Телефон'),
      {
        target: { value: '1' },
      }
    );
    fireEvent.change(
      screen.getByLabelText('Пароль'),
      {
        target: { value: '123' },
      }
    );
    fireEvent.change(
      screen.getByLabelText('Еще раз пароль'),
      {
        target: { value: 'abc' },
      }
    );

    expect(
      screen.getByText(
        validate.errorMessages.email
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        validate.errorMessages.login
      )
    ).toBeDefined();
    expect(
      screen.queryAllByText(
        validate.errorMessages.name
      ).length
    ).toBe(2);
    expect(
      screen.getByText(
        validate.errorMessages.phone
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        validate.errorMessages.password
      )
    ).toBeDefined();
    expect(
      screen.getByText('Пароли не совпадают')
    ).toBeDefined();
  });
});
