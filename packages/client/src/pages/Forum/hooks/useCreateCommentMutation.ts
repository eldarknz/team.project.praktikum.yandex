import { useCallback, useState } from 'react';

import { QueryHandler } from '@pages/Forum/models';
import { useServices } from '@core/ServicesContext';
import { CreateCommentRequest } from '@api/CommentAPI';
import { Comment } from '@workspace/shared/src/models';
import { useAppDispatch, useAppSelector } from '@core/StoreContext';
import { setComments } from '@workspace/shared/src/store/reducers';
import { useViewer } from '@hooks/useViewer';

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
  const { viewer } = useViewer();
  const dispatch = useAppDispatch();
  const services = useServices();

  const mutate = useCallback(
    async (values: Omit<CreateCommentRequest, 'authorId' | 'topicId'>) => {
      if (!viewer) return;

      setFetching(true);

      try {
        const comment = await services.comment.create({ ...values, topicId, authorId: viewer.id });
        dispatch(setComments([...comments, comment]));

        onSuccess(comment);
      } catch (error) {
        console.error(error);
        onError();
      }

      setFetching(false);
    },
    [comments, dispatch, onError, onSuccess, services.comment, topicId, viewer]
  );

  return { isFetching, mutate };
};
