import { useCallback, useState } from 'react';

import { useControllers } from '@core/ControllersContext';
import { setUser } from '@workspace/shared/src/store/reducers';
import { useAppDispatch } from '@core/StoreContext';
import { useViewer } from '@hooks/useViewer';

export const useViewerFromSession = (isLoadingInitial = false) => {
  const [isLoading, setLoading] = useState(isLoadingInitial);
  const dispatch = useAppDispatch();
  const controllers = useControllers();
  const { get } = useViewer();

  const getViewer = useCallback(async () => {
    setLoading(true);

    try {
      await controllers.auth.getUserFromOAuth();
      await get({
        onSuccess: () => null,
        onError: () => {
          throw new Error('Cannot get viewer!');
        },
      });
    } catch {
      dispatch(setUser(null));
    }

    setLoading(false);
  }, [controllers.auth, dispatch, get]);

  return { isLoading, getViewer };
};
