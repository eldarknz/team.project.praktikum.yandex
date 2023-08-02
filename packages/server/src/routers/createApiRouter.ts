import { Router } from 'express';

import { addAllowOrigin } from '@middlewares/addAllowOrigin';
import { urlEncoder } from '@middlewares/urlEncoder';
import { checkAuth } from '@middlewares/checkAuth';
import { BaseApi } from '@api/BaseApi';

export function createApiRouter<T>(api: T & BaseApi): Router {
  const router: Router = Router();
  const baseMiddlewares = [addAllowOrigin, checkAuth];

  router
    .get('/', baseMiddlewares, api.find)
    .post('/', [...baseMiddlewares, urlEncoder], api.create)
    .put('/', [...baseMiddlewares, urlEncoder], api.update)
    .delete('/', [...baseMiddlewares, urlEncoder], api.delete);

  return router;
}
