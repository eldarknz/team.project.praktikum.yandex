import { useEffect } from 'react';
import { Button } from '@components/Button';
import { Grid } from '@components/Grid';
import { useDialog } from '@hooks/useDialog';
import { TopicFormDialog, TopicList } from '@components/Forum/components';
import { Spinner } from '@components/Spinner';

import { useCreatePostMutation, useForumNavigation, useTopicListQuery } from '../../hooks';

import styles from './Forum.module.scss';

export const ForumPage = () => {
  document.title = 'Forum';

  const { toTopic: navigateToTopic } = useForumNavigation();
  const { isFetching, fetchTopicList, topics } = useTopicListQuery({
    onSuccess: () => null,
    onError: () => alert('Cannot get topic list!'),
  });
  const { createPost } = useCreatePostMutation({
    onError: () => alert('Cannot create topic!'),
    onSuccess: topic => {
      navigateToTopic(topic);
      closePostCreator();
    },
  });
  const {
    isOpen: isPostCreatorOpen,
    close: closePostCreator,
    open: openPostCreator,
    setState: setPostCreatorState,
  } = useDialog();

  useEffect(() => {
    fetchTopicList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.page}>
      <TopicFormDialog
        isOpen={isPostCreatorOpen}
        onSubmit={createPost}
        onOpenChange={setPostCreatorState}
      />

      {isFetching ? (
        <Spinner />
      ) : (
        <Grid.Container width={'full'} className={styles.container}>
          <Grid.Row justify="center">
            <Grid.Col width={9}>
              <div className={styles.header}>
                <h1 className={styles.title}>Форум</h1>
                <div className={styles.actions}>
                  <Button children="Создать топик" onClick={openPostCreator} />
                </div>
              </div>

              <TopicList topics={topics} onTopicClick={navigateToTopic} />
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      )}
    </div>
  );
};
