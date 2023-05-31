import { Button } from '@components/Button';
import styles from './EndView.module.scss';

export type EndViewProps = {
  onRetry: () => void;
};

export default function EndView({
  onRetry,
}: EndViewProps) {
  return (
    <>
      <h3 className={styles.title}>
        Ого, вау, вот эта попытка!
      </h3>
      <Button
        className={styles.btn}
        onClick={onRetry}>
        Повторить
      </Button>
    </>
  );
}
