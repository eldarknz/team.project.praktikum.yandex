import { useCallback } from 'react';
import EndView from './view/EndView';
import {
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { ROUTES } from '@routers/routes';

export default function End() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const handleRetry = useCallback(() => {
    navigate(ROUTES.Game.path, {
      state: { level: state.level },
    });
  }, [navigate]);
  return (
    <EndView
      onRetry={handleRetry}
      isWin={!!state?.win}
    />
  );
}
