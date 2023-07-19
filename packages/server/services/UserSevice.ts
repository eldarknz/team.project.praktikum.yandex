import { IUser, UserModel } from '../models';
import { BaseRESTService } from './BaseRESTService';

type WithIdRequest = {
  id: number;
};

class UserService implements BaseRESTService {
  async find({ id }: Partial<WithIdRequest>) {
    if (id) {
      return await UserModel.findOne({
        where: {
          id,
        },
      });
    }
    return await UserModel.findAll();
  }

  async create(props: IUser) {
    return await UserModel.create(props);
  }

  async update(props: IUser) {
    return await UserModel.update(props, {
      where: {
        id: props.id,
      },
    });
  }

  async delete({ id }: WithIdRequest) {
    return await UserModel.destroy({
      where: {
        id,
      },
    });
  }
}

export const userService = new UserService();
