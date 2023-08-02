import { IUserTheme, UserThemeModel } from '../models';
import { BaseRESTService } from './BaseRESTService';

interface FindRequest {
  id: number | null; // ID темы в таблице
}

class UserThemeService implements BaseRESTService {
  async find({ id }: Partial<FindRequest>) {
    if (id) {
      return UserThemeModel.findOne({
        where: {
          id,
        },
      });
    }
    return UserThemeModel.findAll();
  }

  async create(props: IUserTheme) {
    return UserThemeModel.create(props);
  }
}

export const userThemeService = new UserThemeService();
