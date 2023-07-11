import React, { useCallback, useMemo } from 'react';
import { Button } from '@components/Button';
import { Grid } from '@components/Grid';
import { VirtualTable } from '@components/VirtualTable';
import { TCellAlign } from '@components/VirtualTable/components/Cell';
import { IColumnProps } from '@components/VirtualTable/components/Row';
import { Icon } from '@components/Icon';
import { dateConvert } from '@utils/dateConverter';
import { useDialog } from '@hooks/useDialog';
import { ReactComponent as MessageIcon } from '@assets/svg/plain/message-circle.svg';
import { PostCreator, PostCreatorProps } from './components/PostCreator/PostCreator';
import { TPostProps } from './models';
import styles from './Forum.module.scss';

const messages: TPostProps[] = [
  {
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

export const Forum = React.memo(() => {
  const {
    isOpen: isPostCreatorOpen,
    close: closePostCreator,
    open: openPostCreator,
    setState: setPostCreatorState,
  } = useDialog();

  const updateUser: PostCreatorProps['onSubmit'] = useCallback(() => {
    closePostCreator();
  }, [closePostCreator]);

  const onRowClick = useCallback(() => {
    alert('Привет! Я сообщение. Скоро я начну работать.');
  }, []);

  const columns: IColumnProps<any>[] = useMemo(
    () => [
      {
        field: 'post_name',
        headerName: 'Заголовок',
        formatter: (value: string, row: TPostProps) => (
          <div className={styles.postMainInfo}>
            <div className={styles.postTitle}>{value}</div>
            <div className={styles.postMinor}>
              <div className={styles.postAuthor}>{row.author}</div>
              <div className={styles.postStartDate}>{dateConvert(row.create_date)}</div>
            </div>
          </div>
        ),
      },
      {
        field: 'message_count',
        headerName: 'Кол-во сообщений',
        width: '15%',
        formatter: (value: string) => (
          <div className={styles.postMessages}>
            <Icon icon={<MessageIcon />} size={18} />
            <div className={styles.postMessageCount}>{value}</div>
          </div>
        ),
      },
      {
        field: 'upload_date',
        headerName: 'Последнее сообщение',
        align: 'right' as TCellAlign,
        width: '30%',
        formatter: (value: string, row: TPostProps) => (
          <div className={styles.postLatestInfo}>
            <div className={styles.postLatestDate}>{dateConvert(value)}</div>
            <div className={styles.postLatestUser}>{row.last_message.user.login}</div>
          </div>
        ),
      },
    ],
    [],
  );

  return (
    <>
      <PostCreator
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
            <VirtualTable
              columns={columns}
              rows={messages}
              stickyHead={true}
              onRowClick={onRowClick}
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </>
  );
});
