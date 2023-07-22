import { useEffect } from 'react';
import { Button } from '@components/Button';
import { gameAudio } from '@core/GameAudio/GameAudio';
import styles from './EndView.module.scss';

export type EndViewProps = {
  onRetry: () => void;
  isWin: boolean;
};

export default function EndView({ onRetry, isWin }: EndViewProps) {
  useEffect(() => {
    isWin ? gameAudio.finshGame(0.5) : gameAudio.gameOver(0.5);
  }, []);

  return (
    <>
      <h3 className={styles.title}>
        {isWin ? 'Ну что за чемпион!' : 'Ого, вау, вот эта попытка!'}
      </h3>
      <Button className={styles.btn} onClick={onRetry}>
        Повторить
      </Button>
    </>
  );
}
