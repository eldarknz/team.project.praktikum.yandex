import { createContext, useContext } from 'react';

import { AuthAPI } from '@api/AuthAPI';
import { ViewerAPI } from '@api/ViewerAPI';
import { LeaderboardAPI } from '@api/LeaderboardAPI';
import { TopicAPI } from '@api/TopicAPI';
import { CommentAPI } from '@api/CommentAPI';

export interface ServicesModel {
  viewer: ViewerAPI;
  auth: AuthAPI;
  lead: LeaderboardAPI;
  topic: TopicAPI;
  comment: CommentAPI;
}

export const ServicesContext = createContext({} as ServicesModel);

export const useServices = () => {
  return useContext(ServicesContext);
};
