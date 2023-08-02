import { reactionApi } from '@api/ReactionApi';

import { createApiRouter } from './createApiRouter';

const reactionRouter = createApiRouter(reactionApi);

export default reactionRouter;
