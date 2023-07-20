import { Request, Response, NextFunction } from 'express';
import request from 'request';
import { isDev } from '../index';
import { API_URL } from '../../shared/config/constants';

export const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
  let isAuth = false;
  await new Promise((resolve, reject) => {
    request(
      `${API_URL}/auth/user`,
      {
        method: 'GET',
        headers: req.headers,
        withCredentials: true,
      },
      (_, resp) => {
        isAuth = resp ? resp.statusCode === 200 : isDev();
        if (isAuth) {
          next();
          resolve(isAuth);
        } else {
          res.sendStatus(403);
          reject();
        }
      },
    );
  });
};
