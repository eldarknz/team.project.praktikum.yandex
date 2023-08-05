import { ServicesModel } from '@core/ServicesContext';
import { AuthController } from '@controllers/AuthController';
import { LeaderboardController } from '@controllers/LeaderboardController';
import { AuthAPI } from '@api/AuthAPI';
import { ViewerAPI } from '@api/ViewerAPI';
import { LeaderboardAPI } from '@api/LeaderboardAPI';
import { TopicAPI } from '@api/TopicAPI';
import { CommentAPI } from '@api/CommentAPI';
import { RootStore } from '@workspace/shared/src/store';

export const services: ServicesModel = {
  auth: new AuthAPI(),
  viewer: new ViewerAPI(),
  lead: new LeaderboardAPI(),
  topic: new TopicAPI(),
  comment: new CommentAPI(),
};

export const createControllers = (store: RootStore) => ({
  auth: new AuthController(services, store),
  lead: new LeaderboardController(services, store),
});
