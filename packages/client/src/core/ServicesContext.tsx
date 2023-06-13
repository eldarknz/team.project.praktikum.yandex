import { createContext, useContext } from 'react';

import { AuthAPI } from '@api/AuthAPI';
import { ViewerAPI } from '@api/ViewerAPI';

export interface ServicesModel {
  viewer: ViewerAPI;
  auth: AuthAPI;
}

export const ServicesContext = createContext(
  {} as ServicesModel
);

export const useServices = () => {
  return useContext(ServicesContext);
};
