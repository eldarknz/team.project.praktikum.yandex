import { useCallback } from 'react';
import { Button } from '@components/Button';
import { Grid } from '@components/Grid';
import { useDialog } from '@hooks/useDialog';
import { TopicFormDialog, TopicFormDialogProps, TopicList } from '@components/Forum/components';
import { TopicModel } from '@components/Forum/models';

import styles from './Forum.module.scss';

const messages: TopicModel[] = [
  {
    id: 1,
    author: 'Wrexis',
    post_name: 'Star Trek Resurgence |OT| Riker will remember that.',
    message_count: 301,
    create_date: '2020-01-02T14:22:22.000Z',
    upload_date: '2020-01-02T14:22:22.000Z',
    last_message: {
      user: {
        login: 'Salient_Lion',
      },
    },
  },
  {
    id: 2,
    author: 'Wrexis',
    post_name: 'Star Trek Resurgence |OT| Riker will remember that.',
    message_count: 301,
    create_date: '2020-01-02T14:22:22.000Z',
    upload_date: '2020-01-02T14:22:22.000Z',
    last_message: {
      user: {
        login: 'Salient_Lion',
      },
    },
  },
  {
    id: 3,
    author: 'Wrexis',
    post_name: 'Star Trek Resurgence |OT| Riker will remember that.',
    message_count: 301,
    create_date: '2020-01-02T14:22:22.000Z',
    upload_date: '2020-01-02T14:22:22.000Z',
    last_message: {
      user: {
        login: 'Salient_Lion',
      },
    },
  },
  {
    id: 4,
    author: 'Wrexis',
    post_name: 'Star Trek Resurgence |OT| Riker will remember that.',
    message_count: 301,
    create_date: '2020-01-02T14:22:22.000Z',
    upload_date: '2020-01-02T14:22:22.000Z',
    last_message: {
      user: {
        login: 'Salient_Lion',
      },
    },
  },
];

export const ForumPage = () => {
  document.title = 'Forum';

  const {
    isOpen: isPostCreatorOpen,
    close: closePostCreator,
    open: openPostCreator,
    setState: setPostCreatorState,
  } = useDialog();

  const updateUser: TopicFormDialogProps['onSubmit'] = useCallback(() => {
    closePostCreator();
  }, [closePostCreator]);

  const onTopicClick = useCallback(() => {
    alert('Привет! Я сообщение. Скоро я начну работать.');
  }, []);

  return (
    <div className={styles.page}>
      <TopicFormDialog
        isOpen={isPostCreatorOpen}
        onSubmit={updateUser}
        onOpenChange={setPostCreatorState}
      />
      <Grid.Container width={'full'} className={styles.container}>
        <Grid.Row justify="center">
          <Grid.Col width={9}>
            <div className={styles.header}>
              <h1 className={styles.title}>Форум</h1>
              <div className={styles.actions}>
                <Button children="Создать топик" onClick={openPostCreator} />
              </div>
            </div>

            <TopicList topics={messages} onTopicClick={onTopicClick} />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </div>
  );
};
