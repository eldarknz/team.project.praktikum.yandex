import { Request, Response, NextFunction } from 'express';
import request from 'request';

import { API_URL } from '@workspace/shared/config/constants';
import { IS_DEV } from '@constants';

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
        isAuth = resp ? resp.statusCode === 200 : IS_DEV;

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
