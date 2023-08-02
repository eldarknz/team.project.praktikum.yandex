import { Router } from 'express';
import { UserThemeApi } from '../api/UserThemeApi';

export const userThemeRouter = (router: Router) => {
  const themesRouter: Router = Router();

  /* eslint-disable */
  themesRouter.post('/', UserThemeApi.create).get('/', UserThemeApi.find);
  /* eslint-enable */

  router.use('/theme', themesRouter);
};

export default userThemeRouter;
