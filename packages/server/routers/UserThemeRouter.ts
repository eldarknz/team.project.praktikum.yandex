import { Router } from 'express';
import { UserThemeApi } from '../api/UserThemeApi';

export const userThemeRouter = (router: Router) => {
  const themesRouter: Router = Router();

  // prettier-ignore
  themesRouter
    .post('/', UserThemeApi.create)
    .get('/', UserThemeApi.findById)
    .get('/', UserThemeApi.findAll);

  router.use('/theme', themesRouter);
};

export default userThemeRouter;
