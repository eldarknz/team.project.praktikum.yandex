import { useCallback, useState } from 'react';

import { TopicFormDialogValues } from '@components/Forum/components';
import { TopicModel } from '@components/Forum/models';
import { useServices } from '@core/ServicesContext';

import { QueryHandler } from '../models';

export const useCreatePostMutation = ({ onError, onSuccess }: QueryHandler<TopicModel>) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const { topic: topicService } = useServices();

  const createPost = useCallback(
    async (values: TopicFormDialogValues) => {
      setSubmitting(true);

      try {
        const topic = await topicService.create({ post_name: values.theme });
        onSuccess(topic);
      } catch (error) {
        onError();
      }

      setSubmitting(false);
    },
    [onError, onSuccess, topicService]
  );

  return { createPost, isSubmitting };
};
