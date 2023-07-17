import { useMemo } from 'react';
import { useAppSelector } from '@shared/store/hooks';

export const useIsViewerAuthenticated = () => {
  const userId = useAppSelector(store => store.userReducer.user?.id);

  const isAuthenticated = useMemo(() => !!userId, [userId]);

  return isAuthenticated;
};
