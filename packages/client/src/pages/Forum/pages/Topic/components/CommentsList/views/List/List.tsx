import { dateConvert } from '@utils/dateConverter';
import { CommentsListProps } from '../../types';

import styles from './List.module.scss';

type ListProps = Pick<CommentsListProps, 'comments'>;

export const List = ({ comments }: ListProps) => {
  return (
    <div className={styles.root}>
      {comments.map(comment => (
        <div key={comment.id} className={styles.comment}>
          <div className={styles.header}>
            <p>User: {comment.authorId}</p>

            <time className={styles.createdAt} dateTime={comment.createdAt}>
              {dateConvert(comment.createdAt)}
            </time>
          </div>

          <div className={styles.content}>{comment.text}</div>

          <div className={styles.footer}></div>
        </div>
      ))}
    </div>
  );
};
