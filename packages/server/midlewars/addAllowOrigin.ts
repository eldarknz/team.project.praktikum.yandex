import { Request, Response, NextFunction } from 'express';
import { originWhitList } from '../index';

export const addAllowOrigin = (req: Request, res: Response, next: NextFunction) => {
  if (originWhitList.includes(req.headers.referer?.slice(0, -1) || '')) {
    res.setHeader('Access-Control-Allow-Origin', req.headers.referer!.slice(0, -1));
  }
  next();
};
