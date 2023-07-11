import { GetViewerResponse } from '@api/ViewerAPI';
import { store } from '@service/store';
import { useMemo, PropsWithChildren, createContext, useState } from 'react';

export type Viewer = GetViewerResponse;

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
