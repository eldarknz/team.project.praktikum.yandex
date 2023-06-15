import { useMemo } from 'react';

import { useStore } from '@core/StoreContext';

export const useIsViewerAuthenticated = () => {
  const store = useStore();

  const isAuthenticated = useMemo(
    () => !!store.viewer,
    [store.viewer]
  );

  return isAuthenticated;
};
