import { useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import { useTopicQuery, useCommentListQuery, useCreateCommentMutation } from '@pages/Forum/hooks';
import { Spinner } from '@components/Spinner';
import { PageLoader } from '@components/PageLoader';
import { useViewer } from '@hooks/useViewer';
import { dateConvert } from '@utils/dateConverter';

import { MessageForm, CommentsList } from './components';

import styles from './Topic.module.scss';

export const TopicPage = () => {
  const { id } = useParams<{ id: string }>();
  const { isAuthenticated } = useViewer();
  const topicId = Number(id);
  const commentListQuery = useCommentListQuery({
    topicId: Number(id),
    onSuccess: () => null,
    onError: () => alert('Что-то пошло не так!'),
  });
  const { comments } = commentListQuery;

  const topicQuery = useTopicQuery({
    id: topicId,
    onSuccess: () => null,
    onError: () => alert('Что-то пошло не так!'),
  });
  const { topic } = topicQuery;

  const { mutate: sendMessage } = useCreateCommentMutation({
    topicId,
    onSuccess: () => null,
    onError: () => alert('Что-то пошло не так!'),
  });

  useEffect(() => {
    topicQuery.fetch();
    commentListQuery.fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (topicQuery.isFetching || !topic) {
    return <PageLoader />;
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <time className={styles.createdAt} dateTime={topic.createdAt}>
            {dateConvert(topic.createdAt)}
          </time>

          <h1 className={styles.title}>{topic.title}</h1>
        </div>

        <div className={styles.content}>{topic.content}</div>

        <div className={styles.comments}>
          {comments && !commentListQuery.isFetching ? (
            <Fragment>
              <CommentsList comments={comments} />
              {isAuthenticated && <MessageForm onSubmit={sendMessage} />}
            </Fragment>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
};
