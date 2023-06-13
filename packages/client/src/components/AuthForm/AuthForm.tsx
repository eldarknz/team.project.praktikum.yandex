import { useNavigate } from 'react-router-dom';
import {
  Button,
  ButtonProps,
} from '@components/Button';
import {
  Input,
  InputProps,
} from '@components/Input';
import './AuthForm.scss';
import {
  FormEvent,
  useCallback,
  useId,
  useState,
} from 'react';
import { ROUTES } from '@routers/routes';
import { validate } from '@service/Validate';
import { useControllers } from '@core/ControllersContext';
import {
  ISigninData,
  ISignupData,
} from '@api/AuthAPI';

export type AuthFormProps = {
  authType: 'signup' | 'signin';
};

export const AuthForm = ({
  authType,
}: AuthFormProps) => {
  const navigate = useNavigate();
  const controllers = useControllers();
  const [authError, setAuthError] = useState<
    string | null
  >(null);

  const validateConfirmPassword = useCallback(
    (content: string): boolean => {
      const password = (
        document.querySelector(
          '#signUpPassword'
        ) as HTMLInputElement
      ).value;

      return password === content;
    },
    []
  );

  const handleSignInSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(
        event.target as HTMLFormElement
      );

      const data: Record<string, string> = {};

      formData.forEach((value, key) => {
        data[key] = value.toString();
      });

      await controllers.auth.signin({
        values: data as ISigninData,
        onSuccess: () => {
          setAuthError(null);
          navigate(ROUTES.Home.path);
        },
        onError: error => {
          setAuthError(error.message);
        },
      });
    },
    [controllers.auth, navigate]
  );

  const handleSignUpSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(
        event.target as HTMLFormElement
      );

      const data: Record<string, string> = {};

      formData.forEach((value, key) => {
        data[key] = value.toString();
      });

      await controllers.auth.signup({
        values: data as ISignupData,
        onSuccess: () => {
          setAuthError(null);
          navigate(ROUTES.Home.path);
        },
        onError: error => {
          setAuthError(error.message);
        },
      });
    },
    [controllers.auth, navigate]
  );

  const title =
    authType === 'signin'
      ? 'Авторизация'
      : 'Регистрация';

  const signInInputs: InputProps[] = [
    {
      name: 'login',
      labelText: 'Логин',
      errorText:
        'Кажется, вы неверно ввели логин :(',
      validator: validate.login,
    },
    {
      name: 'password',
      type: 'password',
      labelText: 'Пароль',
    },
  ];

  const signInButtons: ButtonProps[] = [
    {
      children: 'Войти',
      id: useId(),
    },
    {
      children: 'Еще не зарегистрированы?',
      id: useId(),
      to: ROUTES.SignUp.path,
      view: 'subButton',
    },
  ];

  const signUpInputs: InputProps[] = [
    {
      name: 'email',
      labelText: 'Почта',
      errorText: validate.errorMessages.email,
      validator: validate.email,
    },
    {
      name: 'login',
      labelText: 'Логин',
      errorText: validate.errorMessages.login,
      validator: validate.login,
    },
    {
      name: 'first_name',
      labelText: 'Имя',
      errorText: validate.errorMessages.name,
      validator: validate.name,
    },
    {
      name: 'second_name',
      labelText: 'Фамилия',
      errorText: validate.errorMessages.name,
      validator: validate.name,
    },
    {
      name: 'phone',
      labelText: 'Телефон',
      errorText: validate.errorMessages.phone,
      validator: validate.phone,
    },
    {
      name: 'password',
      type: 'password',
      id: 'signUpPassword',
      labelText: 'Пароль',
      errorText: validate.errorMessages.password,
      validator: validate.password,
    },
    {
      name: 'password_confirm',
      type: 'password',
      labelText: 'Еще раз пароль',
      errorText: 'Пароли не совпадают',
      validator: validateConfirmPassword,
    },
  ];

  const signUpButtons: ButtonProps[] = [
    {
      children: 'Зарегистрироваться',
      id: useId(),
    },
    {
      children: 'Уже есть аккаунт?',
      id: useId(),
      to: ROUTES.SignIn.path,
      view: 'subButton',
    },
  ];

  const inputs =
    authType === 'signin'
      ? signInInputs
      : signUpInputs;

  const buttons =
    authType === 'signin'
      ? signInButtons
      : signUpButtons;

  const handleSubmit =
    authType === 'signin'
      ? handleSignInSubmit
      : handleSignUpSubmit;

  return (
    <div className="authBoxWrapper">
      <form
        className="authBox"
        onSubmit={handleSubmit}>
        <h1 className="authBoxHeader">{title}</h1>

        {inputs.map(inputProps => (
          <Input
            key={inputProps.name}
            {...inputProps}
          />
        ))}

        {authError && (
          <div className="authBoxError">
            {authError}
          </div>
        )}

        {buttons.map(buttonProps => (
          <Button
            key={buttonProps.id}
            {...buttonProps}
          />
        ))}
      </form>
    </div>
  );
};
