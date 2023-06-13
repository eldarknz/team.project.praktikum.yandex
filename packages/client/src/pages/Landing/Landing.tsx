import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@components/Button';
import { ROUTES } from '@routers/routes';
import backgroundImage from '@assets/png/background.png';
import { Navbar } from '@components/Navbar';
import { useIsViewerAuthenticated } from '@hooks/useIsViewerAuthenticated';

export const LandingPage = () => {
  const navigate = useNavigate();
  const isAuthenticated =
    useIsViewerAuthenticated();

  const handleSignInClick = useCallback(
    () => navigate(ROUTES.SignIn.path),
    [navigate]
  );
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div
      className="landing"
      style={backgroundStyle}>
      <Navbar />

      <div className="landing__content">
        <h1 className="landing__content__title">
          Добро пожаловать в theTeam
        </h1>
        {!isAuthenticated && (
          <Button onClick={handleSignInClick}>
            Войти
          </Button>
        )}
      </div>
    </div>
  );
};
