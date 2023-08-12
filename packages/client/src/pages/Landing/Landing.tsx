import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@components/Button';
import { ROUTES } from '@routers/routes';
import { useViewer } from '@hooks/useViewer';

import './Landing.scss';

export const LandingPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useViewer();

  const handleSignInClick = useCallback(() => navigate(ROUTES.SignIn.path), [navigate]);

  return (
    <div className="landing">
      <div className="landing__content">
        <h1 className="landing__content__title">Добро пожаловать в theTeam</h1>
        {!isAuthenticated && <Button onClick={handleSignInClick}>Войти</Button>}
      </div>
    </div>
  );
};
