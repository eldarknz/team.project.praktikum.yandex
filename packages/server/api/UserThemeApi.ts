import { Request, Response } from 'express';
import { userThemeService } from '../services/UserThemeService';

export class UserThemeApi {
  public static create = async (request: Request, response: Response) => {
    const { body } = request;
    try {
      await userThemeService.create(body);
      return response.status(201).send({ message: 'ok' });
    } catch (error) {
      return response.status(500).send({ message: error });
    }
  };

  public static find = async (request: Request, response: Response) => {
    const { query } = request;
    try {
      let userTheme;
      if (query.id && !!Number(query.id)) {
        userTheme = await userThemeService.findById({ id: Number(query.id) });
      } else {
        userTheme = await userThemeService.findAll();
      }
      return response.status(200).json(userTheme);
    } catch (error) {
      return response.status(500).send({ message: error });
    }
  };
}
