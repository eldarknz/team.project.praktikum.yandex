import { addAllowOrigin } from '../midlewars/addAllowOrigin';
import { Router } from 'express';
import { urlEncoder } from '../midlewars/urlEncoder';
import { checkAuth } from '../midlewars/checkAuth';
import { BaseApi } from '../api/BaseApi';

export function createApiRouter<T>(api: T & BaseApi): Router {
  const router: Router = Router();
  const baseMidlewars = [addAllowOrigin, checkAuth];

  router
    .get('/', baseMidlewars, api.find)
    .post('/', [...baseMidlewars, urlEncoder], api.create)
    .put('/', [...baseMidlewars, urlEncoder], api.update)
    .delete('/', [...baseMidlewars, urlEncoder], api.delete);

  return router;
}
