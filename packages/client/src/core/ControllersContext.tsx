import { createContext, PropsWithChildren, useContext, useMemo } from 'react';

import { AuthController } from '@controllers/AuthController';
import { LeaderboardController } from '@controllers/LeaderboardController';

import { ServicesModel, useServices } from './ServicesContext';

export interface ControllersModel {
  auth: AuthController;
  lead: LeaderboardController;
}

export const ControllersContext = createContext({} as ControllersModel);

export const useControllers = () => {
  return useContext(ControllersContext);
};

interface ControllersProviderProps extends PropsWithChildren {
  createControllers: (services: ServicesModel) => ControllersModel;
}

export const ControllersProvider = ({ createControllers, children }: ControllersProviderProps) => {
  const services = useServices();
  const controllers = useMemo(() => {
    return createControllers(services);
  }, [createControllers, services]);

  return <ControllersContext.Provider value={controllers}>{children}</ControllersContext.Provider>;
};
