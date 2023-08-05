import { useMemo } from 'react';

import { useAppSelector } from '@core/StoreContext';

export const useViewer = () => {
  const userId = useAppSelector(store => store.user.user?.id);
  const viewer = useAppSelector(store => store.user.user);

  const isAuthenticated = useMemo(() => !!userId, [userId]);

  return {
    viewer,
    isAuthenticated,
  };
};
