import { useCallback, useState } from 'react';

import { QueryHandler } from '@pages/Forum/models';
import { useServices } from '@core/ServicesContext';
import { useAppDispatch, useAppSelector } from '@core/StoreContext';
import { setComments } from '@workspace/shared/src/store/reducers';

export interface UseCommentListQueryProps extends QueryHandler {
  topicId: number;
}

export const useCommentListQuery = ({ topicId, onError, onSuccess }: UseCommentListQueryProps) => {
  const [isFetching, setFetching] = useState(false);
  const comments = useAppSelector(store => store.comments.list);
  const dispatch = useAppDispatch();
  const services = useServices();

  const fetch = useCallback(async () => {
    setFetching(true);

    try {
      const fetchedComments = await services.comment.list({ topicId });
      dispatch(setComments(fetchedComments));

      onSuccess();
    } catch (error) {
      console.error(error);

      onError();
    }

    setFetching(false);
  }, [dispatch, onError, onSuccess, services.comment, topicId]);

  return { fetch, comments, isFetching };
};
