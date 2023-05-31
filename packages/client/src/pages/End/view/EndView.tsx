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
      {/* TODO: заменить на компонент когда появится */}
      <button
        className={styles.btn}
        onClick={onRetry}>
        Повторить
      </button>
    </>
  );
}
