import { AuthForm } from '@components/AuthForm';

export const SignUpPage = () => {
  document.title = 'Регистрация';

  return <AuthForm authType="signup" />;
};
