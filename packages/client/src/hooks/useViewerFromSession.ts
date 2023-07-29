import { useCallback, useState } from 'react';

import { useControllers } from '@core/ControllersContext';
import { setUser } from '@workspace/shared/src/store/reducers';
import { useAppDispatch } from '@core/StoreContext';

export const useViewerFromSession = (isLoadingInitial = false) => {
  const [isLoading, setLoading] = useState(isLoadingInitial);
  const dispatch = useAppDispatch();
  const controllers = useControllers();

  const getViewer = useCallback(async () => {
    setLoading(true);

    try {
      await controllers.auth.getUserFromOAuth();
      await controllers.viewer.getViewer({});
    } catch {
      dispatch(setUser(null));
    }

    setLoading(false);
  }, [controllers.auth, controllers.viewer, dispatch]);

  return { isLoading, getViewer };
};
