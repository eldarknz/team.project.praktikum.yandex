import { CommentsListProps } from './types';
import { Empty, List } from './views';

import styles from './CommentsList.module.scss';

export const CommentsList = ({ comments }: CommentsListProps) => {
  return (
    <section className={styles.root}>
      <div className={styles.header}>
        <h4>Комментарии</h4>
      </div>

      {comments.length === 0 && <Empty />}
      {comments.length > 0 && <List comments={comments} />}
    </section>
  );
};
