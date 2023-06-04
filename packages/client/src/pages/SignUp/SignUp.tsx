import { ISignupData } from '@api/AuthAPI';
import { AuthForm } from '@components/AuthForm';
import { authController } from '@controllers/AuthController';
import { FormEvent, useCallback } from 'react';

export const SignUpPage = () => {
  document.title = 'Регистрация';

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(
        event.target as HTMLFormElement
      );

      const data: Record<string, string> = {};

      formData.forEach((value, key) => {
        data[key] = value.toString();
      });

      authController.signup(data as ISignupData);
    },
    []
  );

  return (
    <AuthForm
      authType="signup"
      handleSubmit={handleSubmit}
    />
  );
};
