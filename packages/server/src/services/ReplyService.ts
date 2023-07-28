import { IReply, ReplyModel } from '@db/models';
import { BaseRESTService } from './BaseRESTService';

type WithIdRequest = {
  id: number;
};

class ReplyService implements BaseRESTService {
  async find({ id }: Partial<WithIdRequest>) {
    if (id) {
      return ReplyModel.findOne({
        where: {
          id,
        },
      });
    }
    return ReplyModel.findAll();
  }

  async create(props: IReply) {
    return ReplyModel.create(props);
  }

  async update(props: IReply) {
    return ReplyModel.update(props, {
      where: {
        id: props.id,
      },
    });
  }

  async delete({ id }: WithIdRequest) {
    return ReplyModel.destroy({
      where: {
        id,
      },
    });
  }
}

export const replyService = new ReplyService();
