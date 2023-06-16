import { Forum } from '@layouts/Forum';
import styles from './Forum.module.scss';

export const ForumPage = () => {
  document.title = 'Forum';

  return (
    <div className={styles.page}>
      <Forum />
    </div>
  );
};
