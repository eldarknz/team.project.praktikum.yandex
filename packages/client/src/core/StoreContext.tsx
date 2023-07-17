import { useMemo, PropsWithChildren, createContext, useState } from 'react';

import { Viewer } from '@shared/models/viewer';
import { store } from '@shared/store';

export interface StoreModel {
  viewer: Viewer | null;
  setViewer: (viewer: Viewer | null) => void;
}

export const StoreContext = createContext({
  viewer: null,
} as StoreModel);

interface StoreContextProviderProps extends PropsWithChildren {
  viewer: Viewer | null;
}

export const StoreContextProvider = ({
  viewer: initialViewer,
  children,
}: StoreContextProviderProps) => {
  const [viewer, setViewer] = useState(initialViewer);

  const state: StoreModel = useMemo(
    () => ({
      viewer,
      setViewer,
    }),
    [viewer],
  );

  return <StoreContext.Provider value={state}>{children}</StoreContext.Provider>;
};

export const useStore = () => {
  return store.getState();
};
