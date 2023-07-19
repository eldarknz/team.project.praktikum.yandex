import { IReply, ReplyModel } from '../models';
import { BaseRESTService } from './BaseRESTService';

type WithIdRequest = {
  id: number;
};

class ReplyService implements BaseRESTService {
  async find({ id }: Partial<WithIdRequest>) {
    if (id) {
      return await ReplyModel.findOne({
        where: {
          id,
        },
      });
    }
    return await ReplyModel.findAll();
  }

  async create(props: IReply) {
    return await ReplyModel.create(props);
  }

  async update(props: IReply) {
    return await ReplyModel.update(props, {
      where: {
        id: props.id,
      },
    });
  }

  async delete({ id }: WithIdRequest) {
    return await ReplyModel.destroy({
      where: {
        id,
      },
    });
  }
}

export const replyService = new ReplyService();
