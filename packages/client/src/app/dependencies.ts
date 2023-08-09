import { ServicesModel } from '@core/ServicesContext';
import { AuthController } from '@controllers/AuthController';
import { ViewerController } from '@controllers/ViewerController';
import { LeaderboardController } from '@controllers/LeaderboardController';
import { AuthAPI } from '@api/AuthAPI';
import { ViewerAPI } from '@api/ViewerAPI';
import { LeaderboardAPI } from '@api/LeaderboardAPI';
import { RootStore } from '@workspace/shared/src/store';

export const services: ServicesModel = {
  auth: new AuthAPI(),
  viewer: new ViewerAPI(),
  lead: new LeaderboardAPI(),
};

export const createControllers = (store: RootStore) => ({
  auth: new AuthController(services, store),
  viewer: new ViewerController(services, store),
  lead: new LeaderboardController(services, store),
});
