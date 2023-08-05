import { useCallback, useState } from 'react';

import { TopicModel } from '@components/Forum/models';
import { useServices } from '@core/ServicesContext';

import { QueryHandler } from '../models';

export const useTopicListQuery = ({ onError, onSuccess }: QueryHandler) => {
  const [isFetching, setFetching] = useState(false);
  const [topics, setTopics] = useState<TopicModel[]>([]);
  const { topic: topicService } = useServices();

  const fetchTopicList = useCallback(async () => {
    setFetching(true);

    try {
      setTopics(await topicService.list());
      onSuccess();
    } catch {
      onError;
    }

    setFetching(false);

    return Promise.resolve();
  }, [onError, onSuccess, topicService]);

  return { isFetching, fetchTopicList, topics };
};
