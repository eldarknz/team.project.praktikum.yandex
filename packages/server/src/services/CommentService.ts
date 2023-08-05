import { IComment, CommentModel } from '@db/models';

import { BaseRESTService } from './BaseRESTService';

type WithIdRequest = {
  id: number;
};

class CommentService implements BaseRESTService {
  async find({ id }: Partial<WithIdRequest>) {
    if (id) {
      return CommentModel.findOne({
        where: {
          id,
        },
      });
    }
    return CommentModel.findAll();
  }

  async create(props: IComment, { id }: { id: number }) {
    return CommentModel.create({ ...props, authorId: id });
  }

  async update(props: IComment) {
    return CommentModel.update(props, {
      where: {
        id: props.id,
      },
    });
  }

  async delete({ id }: WithIdRequest) {
    return CommentModel.destroy({
      where: {
        id,
      },
    });
  }
}

export const commentService = new CommentService();
