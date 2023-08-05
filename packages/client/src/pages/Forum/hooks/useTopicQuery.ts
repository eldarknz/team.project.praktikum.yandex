import { useCallback, useState } from 'react';

import { TopicModel } from '@api/TopicAPI';
import { useServices } from '@core/ServicesContext';
import { QueryHandler } from '@utils/hooks';

export interface UseTopicQueryProps extends QueryHandler {
  id: number;
}

export const useTopicQuery = ({ onError, onSuccess, id }: UseTopicQueryProps) => {
  const [isFetching, setFetching] = useState(false);
  const [topic, setTopic] = useState<TopicModel | void>();
  const services = useServices();

  const fetch = useCallback(async () => {
    setFetching(true);

    try {
      setTopic(await services.topic.get({ id }));
      onSuccess();
    } catch (error) {
      console.log(error);
      onError();
    }

    setFetching(false);
  }, [id, onError, onSuccess, services.topic]);

  return { topic, fetch, isFetching };
};
