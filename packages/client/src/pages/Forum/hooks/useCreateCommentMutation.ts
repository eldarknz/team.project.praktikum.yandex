import { useCallback, useState } from 'react';

import { QueryHandler } from '@pages/Forum/models';
import { useServices } from '@core/ServicesContext';
import { CreateCommentRequest } from '@api/CommentAPI';
import { Comment } from '@workspace/shared/src/models';
import { useAppDispatch, useAppSelector } from '@core/StoreContext';
import { setComments } from '@workspace/shared/src/store/reducers';

export interface UseCreateCommentMutationProps extends QueryHandler<Comment> {
  topicId: number;
}

export const useCreateCommentMutation = ({
  topicId,
  onError,
  onSuccess,
}: UseCreateCommentMutationProps) => {
  const [isFetching, setFetching] = useState(false);
  const comments = useAppSelector(store => store.comments.list);
  const dispatch = useAppDispatch();
  const services = useServices();

  const mutate = useCallback(
    async ({ text }: Omit<CreateCommentRequest, 'topicId'>) => {
      setFetching(true);

      try {
        const comment = await services.comment.create({ text, topicId });
        dispatch(setComments([...comments, comment]));

        onSuccess(comment);
      } catch (error) {
        console.error(error);
        onError();
      }

      setFetching(false);
    },
    [comments, dispatch, onError, onSuccess, services.comment, topicId]
  );

  return { isFetching, mutate };
};
