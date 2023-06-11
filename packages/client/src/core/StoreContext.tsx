import {
  useMemo,
  PropsWithChildren,
  createContext,
  useState,
  useContext,
} from 'react';

export interface Viewer {
  id: number;
  first_name: string | null;
  second_name: string | null;
  display_name: string | null;
  login: string | null;
  email: string | null;
  phone: string | null;
  avatar: string | null;
}

export interface StoreModel {
  viewer: Viewer | null;
  setViewer: (viewer: Viewer | null) => void;
}

export const StoreContext = createContext({
  viewer: null,
} as StoreModel);

interface StoreContextProviderProps
  extends PropsWithChildren {
  viewer: Viewer | null;
}

export const StoreContextProvider = ({
  viewer: initialViewer,
  children,
}: StoreContextProviderProps) => {
  const [viewer, setViewer] = useState(
    initialViewer
  );

  const state: StoreModel = useMemo(
    () => ({
      viewer,
      setViewer,
    }),
    [viewer]
  );

  return (
    <StoreContext.Provider value={state}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  return useContext(StoreContext);
};
