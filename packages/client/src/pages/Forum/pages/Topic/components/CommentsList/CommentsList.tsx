import { Comment } from '@workspace/shared/src/models';

import styles from './CommentsList.module.scss';

export interface CommentsListProps {
  comments: Comment[];
}

export const CommentsList = ({ comments }: CommentsListProps) => {
  return (
    <div className={styles.list}>
      {comments.map(comment => (
        <div key={comment.id} className={styles.comment}>
          <div className={styles.header}>{comment.authorId}</div>
          <div className={styles.content}>{comment.text}</div>
          <div className={styles.footer}></div>
        </div>
      ))}
    </div>
  );
};
