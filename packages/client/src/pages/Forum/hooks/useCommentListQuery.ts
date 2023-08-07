import { useCallback, useState } from 'react';

import { useServices } from '@core/ServicesContext';
import { useAppDispatch, useAppSelector } from '@core/StoreContext';
import { setComments } from '@workspace/shared/src/store/reducers';
import { QueryHandler } from '@utils/hooks';

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
      const fetchedComments = await services.topic.comments(topicId);
      dispatch(setComments(fetchedComments));

      onSuccess();
    } catch (error) {
      console.error(error);

      onError();
    }

    setFetching(false);
  }, [dispatch, onError, onSuccess, services.topic, topicId]);

  return { fetch, comments, isFetching };
};
