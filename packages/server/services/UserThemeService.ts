import { IUserTheme, UserThemeModel } from '../models';
import { BaseRESTService } from './BaseRESTService';

interface FindRequest {
  id: number; // ID темы в таблице
}

class UserThemeService implements BaseRESTService {
  findById({ id }: Partial<FindRequest>) {
    return UserThemeModel.findOne({
      where: {
        id,
      },
    });
  }

  findAll() {
    return UserThemeModel.findAll();
  }

  create(props: IUserTheme) {
    return UserThemeModel.create(props);
  }
}

export const userThemeService = new UserThemeService();
