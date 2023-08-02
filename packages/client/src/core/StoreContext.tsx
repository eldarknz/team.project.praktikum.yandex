import { useMemo, PropsWithChildren, createContext, useState } from 'react';
import { useStore as useStoreRedux } from 'react-redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { Viewer } from '@workspace/shared/src/models';
import { RootState, AppDispatch } from '@workspace/shared/src/store';

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
    [viewer]
  );

  return <StoreContext.Provider value={state}>{children}</StoreContext.Provider>;
};

export const useStore = () => {
  return useStoreRedux<RootState>();
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
