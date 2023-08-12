import { TopicModel as TopicModelBase } from '@api/TopicAPI';

export type TopicModel = TopicModelBase & {
  commentsCount?: number;
};
