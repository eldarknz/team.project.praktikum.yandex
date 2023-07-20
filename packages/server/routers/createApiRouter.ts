import { addAllowOrigin } from '../midlewars/addAllowOrigin';
import { Router } from 'express';
import { urlEncoder } from '../midlewars/urlEncoder';
import { checkAuth } from '../midlewars/checkAuth';
import { BaseApi } from '../api/BaseApi';

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
