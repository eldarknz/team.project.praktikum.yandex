import { Router } from 'express';

import { addAllowOrigin } from '@middlewares/addAllowOrigin';
import { urlEncoder } from '@middlewares/urlEncoder';
import { BaseApi } from '@api/BaseApi';

export function createApiRouter<T>(api: T & BaseApi): Router {
  const router: Router = Router();
  const baseMiddlewares = [addAllowOrigin];

  router
    .get('/', baseMiddlewares, api.find)
    .post('/', [...baseMiddlewares, urlEncoder], api.create)
    .put('/', [...baseMiddlewares, urlEncoder], api.update)
    .delete('/', [...baseMiddlewares, urlEncoder], api.delete);

  return router;
}
