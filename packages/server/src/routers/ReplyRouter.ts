import { replyApi } from '@api/ReplyApi';

import { createApiRouter } from './createApiRouter';

const replyRouter = createApiRouter(replyApi);

export default replyRouter;
