import { Request, Response } from 'express';
import { userThemeService } from '../services/UserThemeService';

export class UserThemeApi {
  public static create = async (req: Request, res: Response) => {
    const { body } = req;
    await userThemeService
      .create(body)
      .then(() => res.status(200).send({ message: 'ok' }))
      .catch(e => res.status(500).send({ message: e }));
  };

  public static find = async (req: Request, res: Response) => {
    const { query } = req;
    await userThemeService
      .find({ id: query.id && !!Number(query.id) ? Number(query.id) : undefined })
      .then(d => res.status(200).send(d))
      .catch(e => res.send(500).send({ message: e }));
  };
}
