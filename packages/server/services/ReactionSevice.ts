import { IReaction, ReactionModel } from '../models';
import { BaseRESTService } from './BaseRESTService';

type WithIdRequest = {
  id: number;
};

class ReactionService implements BaseRESTService {
  async find({ id }: Partial<WithIdRequest>) {
    if (id) {
      return await ReactionModel.findOne({
        where: {
          id,
        },
      });
    }
    return await ReactionModel.findAll();
  }

  async create(props: IReaction) {
    return await ReactionModel.create(props);
  }

  async update(props: IReaction) {
    return await ReactionModel.update(props, {
      where: {
        id: props.id,
      },
    });
  }

  async delete({ id }: WithIdRequest) {
    return await ReactionModel.destroy({
      where: {
        id,
      },
    });
  }
}

export const reactionService = new ReactionService();
