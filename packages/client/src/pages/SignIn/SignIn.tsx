import { AuthForm } from '@components/AuthForm';

export const SignInPage = () => {
  document.title = 'Вход';

  return <AuthForm authType="signin" />;
};
