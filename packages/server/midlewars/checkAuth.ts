import { Request, Response, NextFunction } from 'express';
import request from 'request';
import { isDev } from '../index';
import { API_URL } from '../../shared/config/constants';

declare module 'express-serve-static-core' {
  interface Request {
    user?: {
      id: number;
      email: string;
      login: string | null;
      first_name: string;
      second_name: string;
      display_name: string | null;
      phone: string;
      avatar: string | null;
    };
  }
}

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
          req.user = JSON.parse(resp.body);
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
