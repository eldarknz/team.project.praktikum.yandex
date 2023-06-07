import { AuthForm } from '@components/AuthForm';
import { authController as authController } from '@controllers/AuthController';

export const SignInPage = () => {
  document.title = 'Вход';

  return (
    <AuthForm
      authType="signin"
      handleSubmit={event => {
        event.preventDefault();

        const formData = new FormData(
          event.target as HTMLFormElement
        );

        const data = {
          login: '',
          password: '',
        };

        formData.forEach((value, key) => {
          if (
            key === 'login' ||
            key === 'password'
          ) {
            data[key] = value.toString();
          }
        });

        authController.signin(data);
      }}
    />
  );
};
