import { topicApi } from '@api/TopicApi';

import { createApiRouter } from './createApiRouter';

const topicRouter = createApiRouter(topicApi);

topicRouter.get('/comments', topicApi.comments);

export default topicRouter;
