import { useMemo } from 'react';

import { useAppSelector } from '@workspace/shared';

export const useViewer = () => {
  const userId = useAppSelector(store => store.userReducer.user?.id);
  const viewer = useAppSelector(store => store.userReducer.user);

  const isAuthenticated = useMemo(() => !!userId, [userId]);

  return {
    viewer,
    isAuthenticated,
  };
};
