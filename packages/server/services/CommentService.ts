import { IComment, CommentModel } from '../models';
import { BaseRESTService } from './BaseRESTService';

type WithIdRequest = {
  id: number;
};

class CommentService implements BaseRESTService {
  async find({ id }: Partial<WithIdRequest>) {
    if (id) {
      return await CommentModel.findOne({
        where: {
          id,
        },
      });
    }
    return await CommentModel.findAll();
  }

  async create(props: IComment) {
    return await CommentModel.create(props);
  }

  async update(props: IComment) {
    return await CommentModel.update(props, {
      where: {
        id: props.id,
      },
    });
  }

  async delete({ id }: WithIdRequest) {
    return await CommentModel.destroy({
      where: {
        id,
      },
    });
  }
}

export const commentService = new CommentService();
