import { useCallback, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '@core/StoreContext';
import { QueryHandler } from '@utils/hooks';
import { GetViewerResponse } from '@api/ViewerAPI';
import { setUser } from '@workspace/shared/src/store/reducers';
import { useServices } from '@core/ServicesContext';

export const useViewer = () => {
  const dispatch = useAppDispatch();
  const services = useServices();

  const userId = useAppSelector(store => store.user.user?.id);
  const viewer = useAppSelector(store => store.user.user);

  const isAuthenticated = useMemo(() => !!userId, [userId]);

  const get = useCallback(
    async ({ onError, onSuccess }: QueryHandler<GetViewerResponse>) => {
      try {
        const viewer = await services.viewer.getViewer();

        dispatch(setUser(viewer));

        onSuccess(viewer);
      } catch (error) {
        console.error(error);
        dispatch(setUser(null));

        onError();
      }
    },
    [dispatch, services.viewer]
  );

  return {
    viewer,
    isAuthenticated,
    get,
  };
};
