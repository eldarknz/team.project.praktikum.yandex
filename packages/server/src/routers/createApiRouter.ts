import { Router } from 'express';

import { addAllowOrigin } from '@middlewares/addAllowOrigin';
import { urlEncoder } from '@middlewares/urlEncoder';
import { checkAuth } from '@middlewares/checkAuth';
import { BaseApi } from '@api/BaseApi';

export function createApiRouter<T>(api: T & BaseApi): Router {
  const router: Router = Router();
  const baseMidllewars = [addAllowOrigin, checkAuth];

  router
    .get('/', baseMidllewars, api.find)
    .post('/', [...baseMidllewars, urlEncoder], api.create)
    .put('/', [...baseMidllewars, urlEncoder], api.update)
    .delete('/', [...baseMidllewars, urlEncoder], api.delete);

  return router;
}
