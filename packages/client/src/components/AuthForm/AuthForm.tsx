import {
  Button,
  ButtonProps,
} from '@components/Button';
import {
  Input,
  InputProps,
} from '@components/Input';
import './AuthForm.scss';
import { FormEvent, useId } from 'react';
import { ROUTES } from '@routers/routes';

export type AuthFormProps = {
  authType: 'signup' | 'signin';
  handleSubmit: (
    event: FormEvent<HTMLFormElement>
  ) => void;
};

export const AuthForm = ({
  authType,
  handleSubmit,
}: AuthFormProps) => {
  const title =
    authType === 'signin'
      ? 'Авторизация'
      : 'Регистрация';

  const signInInputs: InputProps[] = [
    {
      name: 'login',
      labelText: 'Логин',
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
    },
    {
      name: 'login',
      labelText: 'Логин',
    },
    {
      name: 'first_name',
      labelText: 'Имя',
    },
    {
      name: 'second_name',
      labelText: 'Фамилия',
    },
    {
      name: 'phone',
      labelText: 'Телефон',
    },
    {
      name: 'password',
      type: 'password',
      labelText: 'Пароль',
    },
    {
      name: 'password_confirm',
      type: 'password',
      labelText: 'Еще раз пароль',
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
