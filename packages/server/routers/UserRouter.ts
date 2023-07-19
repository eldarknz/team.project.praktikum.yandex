import { userApi } from '../api/UserApi';
import { createApiRouter } from './createApiRouter';

const userRouter = createApiRouter(userApi);

export default userRouter;
