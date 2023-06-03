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
import { validate } from '@service/Validate';

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
      errorText:
        'Требования к логину: от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)',
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
      errorText:
        'Кажется, вы ошиблись в адресе 😱 Пожалуйста, перепроверьте еще раз!',
      validator: validate.email,
    },
    {
      name: 'login',
      labelText: 'Логин',
      errorText:
        'Требования к логину: от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)',
      validator: validate.login,
    },
    {
      name: 'first_name',
      labelText: 'Имя',
      errorText:
        'Требования: латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)',
      validator: validate.name,
    },
    {
      name: 'second_name',
      labelText: 'Фамилия',
      errorText:
        'Требования: латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)',
      validator: validate.name,
    },
    {
      name: 'phone',
      labelText: 'Телефон',
      errorText:
        'Требования: от 10 до 15 символов, состоит из цифр, может начинается с плюса',
      validator: validate.phone,
    },
    {
      name: 'password',
      type: 'password',
      labelText: 'Пароль',
      errorText:
        'Требования: от 7 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
      validator: validate.password,
    },
    {
      name: 'password_confirm',
      type: 'password',
      labelText: 'Еще раз пароль',
      validator: validate.passwordConfirm,
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
