import { useCallback } from 'react';
import EndView from './view/EndView';

export default function End() {
  const handleRetry = useCallback(() => {
    //TODO: написать обработчик когда будет делаться игра
  }, []);
  return <EndView onRetry={handleRetry} />;
}
