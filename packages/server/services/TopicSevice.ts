import { ITopicModel, TopicModel } from '../models';
import { BaseRESTService } from './BaseRESTService';

type WithIdRequest = {
  id: number;
};

class TopicService implements BaseRESTService {
  async find({ id }: Partial<WithIdRequest>) {
    if (id) {
      return TopicModel.findOne({
        where: {
          id,
        },
      });
    }
    return TopicModel.findAll();
  }

  async create(props: ITopicModel) {
    return TopicModel.create(props);
  }

  async update(props: ITopicModel) {
    return TopicModel.update(props, {
      where: {
        id: props.id,
      },
    });
  }

  async delete({ id }: WithIdRequest) {
    return TopicModel.destroy({
      where: {
        id,
      },
    });
  }
}

export const topicService = new TopicService();
