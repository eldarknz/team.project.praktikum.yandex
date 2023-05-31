import Select, {
  SelectKind,
} from '@components/Select/Select';
import styles from './StartView.module.scss';
import { Button } from '@components/Button';

export type StartViewProps = {
  username: string;
  onStart: () => void;
  active: string;
  setActive: (v: string) => void;
  list: string[];
};

export default function StartView({
  username,
  onStart,
  ...rest
}: StartViewProps) {
  return (
    <>
      <h3 className={styles.title}>
        Привет, {username}
      </h3>
      <p className={styles.text}>
        Выбери уровень и начни игру)
      </p>
      <Select<string>
        variant={SelectKind.Purple}
        {...rest}
      />
      <Button
        className={styles.btn}
        onClick={onStart}>
        Начать
      </Button>
    </>
  );
}
