import { topicApi } from '../api/TopicApi';
import { createApiRouter } from './createApiRouter';

const topicRouter = createApiRouter(topicApi);

export default topicRouter;
