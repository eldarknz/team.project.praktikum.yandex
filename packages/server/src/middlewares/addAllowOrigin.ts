import { Request, Response, NextFunction } from 'express';

import { CORS_ORIGIN_WHITELIST } from '@constants';

export const addAllowOrigin = (req: Request, res: Response, next: NextFunction) => {
  const referer = (req.headers.referer || '').slice(0, -1);

  if (CORS_ORIGIN_WHITELIST.includes(referer)) {
    res.setHeader('Access-Control-Allow-Origin', referer);
  }

  next();
};
