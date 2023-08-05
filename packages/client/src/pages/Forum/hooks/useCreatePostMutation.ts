import { useCallback, useState } from 'react';

import { CreateTopicRequest } from '@api/TopicAPI';
import { TopicModel } from '@components/Forum/models';
import { useServices } from '@core/ServicesContext';

import { QueryHandler } from '../models';
import { useViewer } from '@hooks/useViewer';

export const useCreatePostMutation = ({ onError, onSuccess }: QueryHandler<TopicModel>) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const { topic: topicService } = useServices();
  const { viewer } = useViewer();

  const createPost = useCallback(
    async (values: Omit<CreateTopicRequest, 'authorId'>) => {
      if (!viewer) return;

      setSubmitting(true);

      try {
        const topic = await topicService.create({ ...values, authorId: viewer?.id });
        onSuccess(topic);
      } catch (error) {
        console.log(error);
        onError();
      }

      setSubmitting(false);
    },
    [onError, onSuccess, topicService, viewer]
  );

  return { createPost, isSubmitting };
};
