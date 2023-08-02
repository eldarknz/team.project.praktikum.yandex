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
      const userTheme = await userThemeService.find({
        id: query.id && !!Number(query.id) ? Number(query.id) : undefined,
      });
      return response.status(200).json(userTheme);
    } catch (error) {
      return response.status(500).send({ message: error });
    }
  };
}
