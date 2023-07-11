import { createContext, useContext } from 'react';

import { AuthAPI } from '@api/AuthAPI';
import { ViewerAPI } from '@api/ViewerAPI';
import { LeaderboardAPI } from '@api/LeaderboardAPI';

export interface ServicesModel {
  viewer: ViewerAPI;
  auth: AuthAPI;
  lead: LeaderboardAPI;
}

export const ServicesContext = createContext({} as ServicesModel);

export const useServices = () => {
  return useContext(ServicesContext);
};
