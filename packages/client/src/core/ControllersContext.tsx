import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
} from 'react';

import { AuthController } from '@controllers/AuthController';
import { ViewerController } from '@controllers/ViewerController';
import {
  StoreModel,
  useStore,
} from './StoreContext';
import {
  ServicesModel,
  useServices,
} from './ServicesContext';

export interface ControllersModel {
  viewer: ViewerController;
  auth: AuthController;
}

export const ControllersContext = createContext(
  {} as ControllersModel
);

export const useControllers = () => {
  return useContext(ControllersContext);
};

interface ControllersProviderProps
  extends PropsWithChildren {
  createControllers: (
    state: StoreModel,
    services: ServicesModel
  ) => ControllersModel;
}

export const ControllersProvider = ({
  createControllers,
  children,
}: ControllersProviderProps) => {
  const services = useServices();
  const store = useStore();
  const controllers = useMemo(() => {
    return createControllers(store, services);
  }, [createControllers, services, store]);

  return (
    <ControllersContext.Provider
      value={controllers}>
      {children}
    </ControllersContext.Provider>
  );
};
