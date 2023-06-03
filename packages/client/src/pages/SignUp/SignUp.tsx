import { ISignupData } from '@api/AuthAPI';
import { AuthForm } from '@components/AuthForm';
import { authController } from '@controllers/AuthController';

export const SignUpPage = () => {
  document.title = 'Регистрация';
  return (
    <AuthForm
      authType="signup"
      handleSubmit={event => {
        event.preventDefault();

        const formData = new FormData(
          event.target as HTMLFormElement
        );

        const data: Record<string, string> = {};

        formData.forEach((value, key) => {
          data[key] = value.toString();
        });

        authController.signup(
          data as ISignupData
        );
      }}
    />
  );
};
