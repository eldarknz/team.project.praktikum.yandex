import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@components/Button';
import { ROUTES } from '@routers/routes';
import backgroundImage from '@assets/png/background.png';

export const LandingPage = () => {
  const navigate = useNavigate();

  const handleSignInClick = useCallback(
    () => navigate(ROUTES.SignIn.path),
    [navigate]
  );
  const handleSignUnClick = useCallback(
    () => navigate(ROUTES.SignUp.path),
    [navigate]
  );

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div
      className="landing"
      style={backgroundStyle}>
      <div className="landing__buttonsAuth">
        <Button
          className="basicButton basicButton--link"
          onClick={handleSignInClick}>
          Войти
        </Button>
        <Button
          className="basicButton basicButton--link"
          onClick={handleSignUnClick}>
          Зарегистрироваться
        </Button>
      </div>
      <div className="landing__content">
        <h1 className="landing__content__title">
          Добро пожаловать в theTeam
        </h1>
        <Button onClick={handleSignInClick}>
          Войти
        </Button>
      </div>
    </div>
  );
};
