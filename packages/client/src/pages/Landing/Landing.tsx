import React from 'react';
import { Button } from '@components/Button';
import { ROUTES } from '@routers/routes';

export const LandingPage = () => {
  const signInPath = ROUTES.SignIn.path;
  const signUpPath = ROUTES.SignUp.path;

  const handleSignInClick = () => {
    document.location = signInPath;
  };

  return (
    <div className="landing">
      <div className="landing--buttons-auth">
        <Button href={signInPath}>Войти</Button>
        <Button href={signUpPath}>
          Зарегистрироваться
        </Button>
      </div>
      <div className="landing--content">
        <h1 className="landing--content---title">
          Добро пожаловать в theTeam
        </h1>
        <Button onClick={handleSignInClick}>
          Войти
        </Button>
      </div>
    </div>
  );
};
