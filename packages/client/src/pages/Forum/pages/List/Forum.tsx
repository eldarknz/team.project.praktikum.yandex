import { useEffect } from 'react';
import { Button } from '@components/Button';
import { Grid } from '@components/Grid';
import { useDialog } from '@hooks/useDialog';
import { Spinner } from '@components/Spinner';
import { useViewer } from '@hooks/useViewer';

import { useCreatePostMutation, useForumNavigation, useTopicListQuery } from '../../hooks';

import { TopicFormDialog, TopicList } from './components';

import styles from './Forum.module.scss';

export const ForumPage = () => {
  document.title = 'Forum';

  const { isAuthenticated } = useViewer();
  const { toTopic: navigateToTopic } = useForumNavigation();
  const { isFetching, fetchTopicList, topics } = useTopicListQuery({
    onSuccess: () => null,
    onError: () => alert('Cannot get topic list!'),
  });
  const topicDialog = useDialog();
  const { createPost } = useCreatePostMutation({
    onError: () => alert('Cannot create topic!'),
    onSuccess: topic => {
      navigateToTopic(topic);
      topicDialog.close();
    },
  });

  useEffect(() => {
    fetchTopicList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.page}>
      <TopicFormDialog
        isOpen={topicDialog.isOpen}
        onSubmit={createPost}
        onOpenChange={topicDialog.setState}
      />

      {isFetching ? (
        <Spinner />
      ) : (
        <Grid.Container width={'full'} className={styles.container}>
          <Grid.Row justify="center">
            <Grid.Col width={9}>
              <div className={styles.header}>
                <h1 className={styles.title}>Форум</h1>
                {isAuthenticated && (
                  <div className={styles.actions}>
                    <Button children="Создать топик" onClick={topicDialog.open} />
                  </div>
                )}
              </div>

              <TopicList topics={topics} onTopicClick={navigateToTopic} />
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      )}
    </div>
  );
};
