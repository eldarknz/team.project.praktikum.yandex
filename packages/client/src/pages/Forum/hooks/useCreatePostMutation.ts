import { useCallback, useState } from 'react';

import { CreateTopicRequest } from '@api/TopicAPI';
import { TopicModel } from '@components/Forum/models';
import { useServices } from '@core/ServicesContext';

import { QueryHandler } from '../models';

export const useCreatePostMutation = ({ onError, onSuccess }: QueryHandler<TopicModel>) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const { topic: topicService } = useServices();

  const createPost = useCallback(
    async (values: CreateTopicRequest) => {
      setSubmitting(true);

      try {
        const topic = await topicService.create({ ...values });
        onSuccess(topic);
      } catch (error) {
        console.log(error);
        onError();
      }

      setSubmitting(false);
    },
    [onError, onSuccess, topicService]
  );

  return { createPost, isSubmitting };
};
