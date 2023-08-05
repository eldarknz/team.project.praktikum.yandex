import { useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import { useTopicQuery, useCommentListQuery, useCreateCommentMutation } from '@pages/Forum/hooks';
import { Spinner } from '@components/Spinner';

import { MessageForm, CommentsList } from './components';

import styles from './Topic.module.scss';
import { PageLoader } from '@components/PageLoader';

export const TopicPage = () => {
  const { id } = useParams<{ id: string }>();
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
        <h1 className={styles.header}>{topic.title}</h1>

        <div className={styles.content}>{topic.content}</div>

        <div className={styles.comments}>
          {comments && !commentListQuery.isFetching ? (
            <Fragment>
              <CommentsList comments={comments} />
              <MessageForm onSubmit={sendMessage} />
            </Fragment>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
};
