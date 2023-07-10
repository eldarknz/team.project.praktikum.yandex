import { useCallback, useState } from 'react';

import { useControllers } from '@core/ControllersContext';
import { useAppDispatch } from '@service/store/hooks';
import { setUser } from '@service/store/reducers/userSlice';

export const useViewerFromSession = () => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const controllers = useControllers();

  const getViewer = useCallback(async () => {
    setLoading(true);

    await controllers.auth.getUserFromOAuth();

    try {
      await controllers.viewer.getViewer({});
    } catch {
      dispatch(setUser(null));
    }

    setLoading(false);
  }, [
    controllers.auth,
    controllers.viewer,
    dispatch,
  ]);

  return { isLoading, setLoading, getViewer };
};
