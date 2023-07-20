import { IUser, UserModel } from '../models';
import { BaseRESTService } from './BaseRESTService';

type WithIdRequest = {
  id: number;
};

class UserService implements BaseRESTService {
  async find({ id }: Partial<WithIdRequest>) {
    if (id) {
      return UserModel.findOne({
        where: {
          id,
        },
      });
    }
    return UserModel.findAll();
  }

  async create(props: IUser) {
    return UserModel.create(props);
  }

  async update(props: IUser) {
    return UserModel.update(props, {
      where: {
        id: props.id,
      },
    });
  }

  async delete({ id }: WithIdRequest) {
    return UserModel.destroy({
      where: {
        id,
      },
    });
  }
}

export const userService = new UserService();
