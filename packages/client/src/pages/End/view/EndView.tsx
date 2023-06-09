import { Button } from '@components/Button';
import styles from './EndView.module.scss';

export type EndViewProps = {
  onRetry: () => void;
  isWin: boolean;
};

export default function EndView({
  onRetry,
  isWin,
}: EndViewProps) {
  return (
    <>
      <h3 className={styles.title}>
        {isWin
          ? 'Ну что за чемпион!'
          : 'Ого, вау, вот эта попытка!'}
      </h3>
      <Button
        className={styles.btn}
        onClick={onRetry}>
        Повторить
      </Button>
    </>
  );
}
