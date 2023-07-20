import { IReaction, ReactionModel } from '../models';
import { BaseRESTService } from './BaseRESTService';

type WithIdRequest = {
  id: number;
};

class ReactionService implements BaseRESTService {
  async find({ id }: Partial<WithIdRequest>) {
    if (id) {
      return ReactionModel.findOne({
        where: {
          id,
        },
      });
    }
    return ReactionModel.findAll();
  }

  async create(props: IReaction) {
    return ReactionModel.create(props);
  }

  async update(props: IReaction) {
    return ReactionModel.update(props, {
      where: {
        id: props.id,
      },
    });
  }

  async delete({ id }: WithIdRequest) {
    return ReactionModel.destroy({
      where: {
        id,
      },
    });
  }
}

export const reactionService = new ReactionService();
