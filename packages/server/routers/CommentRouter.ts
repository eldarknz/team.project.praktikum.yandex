import { commentApi } from '../api/CommentApi';
import { createApiRouter } from './createApiRouter';

const commentRouter = createApiRouter(commentApi);

export default commentRouter;
