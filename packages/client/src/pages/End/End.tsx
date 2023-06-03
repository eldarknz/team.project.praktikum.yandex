import { useCallback } from 'react';
import EndView from './view/EndView';
import {
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { ROUTES } from '@routers/routes';

export default function End() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const handleRetry = useCallback(() => {
    navigate(ROUTES.Game.path);
  }, [navigate]);
  return (
    <EndView
      onRetry={handleRetry}
      isWin={!!searchParams.get('win')}
    />
  );
}
