import { useMemo } from 'react';

import { VirtualTable } from '@components/VirtualTable';
import { IColumnProps } from '@components/VirtualTable/components/Row';
import { dateConvert } from '@utils/dateConverter';

import { TopicModel } from '@components/Forum/models';

import styles from './TopicList.module.scss';

export interface TopicListProps {
  topics: TopicModel[];
  onTopicClick: (topic: TopicModel) => void;
}

export const TopicList = ({ topics, onTopicClick }: TopicListProps) => {
  const columns: IColumnProps<TopicModel>[] = useMemo(
    () => [
      {
        field: 'postName',
        headerName: 'Заголовок',
        formatter: (_, topic: TopicModel) => (
          <div className={styles.postMainInfo}>
            <div className={styles.postTitle}>{topic.title}</div>
            <div className={styles.postMinor}>
              <div className={styles.postStartDate}>{dateConvert(topic.createdAt)}</div>
            </div>
          </div>
        ),
      },
      // {
      //   field: 'commentsCount',
      //   headerName: 'Кол-во сообщений',
      //   width: '15%',
      //   formatter: (value: string) => (
      //     <div className={styles.postMessages}>
      //       <Icon icon={<MessageIcon />} size={18} />
      //       <div className={styles.postMessageCount}>{value || 0}</div>
      //     </div>
      //   ),
      // },
      // {
      //   field: 'upload_date',
      //   headerName: 'Последнее сообщение',
      //   align: 'right' as TCellAlign,
      //   width: '30%',
      //   formatter: (value: string) => (
      //     <div className={styles.postLatestInfo}>
      //       <div className={styles.postLatestDate}>{dateConvert(value)}</div>
      //     </div>
      //   ),
      // },
    ],
    []
  );

  return (
    <VirtualTable columns={columns} rows={topics} stickyHead={true} onRowClick={onTopicClick} />
  );
};
