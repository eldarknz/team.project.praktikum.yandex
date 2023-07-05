import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
} from 'react';

import { AuthController } from '@controllers/AuthController';
import { ViewerController } from '@controllers/ViewerController';
import { LeaderboardController } from '@controllers/LeaderboardController';

import {
  ServicesModel,
  useServices,
} from './ServicesContext';
import { RootStore, store } from '@service/store';

export interface ControllersModel {
  viewer: ViewerController;
  auth: AuthController;
  lead: LeaderboardController;
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
    store: RootStore,
    services: ServicesModel
  ) => ControllersModel;
}

export const ControllersProvider = ({
  createControllers,
  children,
}: ControllersProviderProps) => {
  const services = useServices();
  const controllers = useMemo(() => {
    return createControllers(store, services);
  }, [createControllers, services]);

  return (
    <ControllersContext.Provider
      value={controllers}>
      {children}
    </ControllersContext.Provider>
  );
};
