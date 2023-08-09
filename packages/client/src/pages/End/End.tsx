import { useCallback } from 'react';
import EndView from './view/EndView';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '@routers/routes';

export default function End() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const handleRetry = useCallback(() => {
    navigate(ROUTES.Start.path, {
      state: { level: state.level },
    });
  }, [navigate, state.level]);
  return <EndView onRetry={handleRetry} isWin={!!state?.win} />;
}
