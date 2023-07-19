import { ITopicModel, TopicModel } from '../models';
import { BaseRESTService } from './BaseRESTService';

type WithIdRequest = {
  id: number;
};

class TopicService implements BaseRESTService {
  async find({ id }: Partial<WithIdRequest>) {
    if (id) {
      return await TopicModel.findOne({
        where: {
          id,
        },
      });
    }
    return await TopicModel.findAll();
  }

  async create(props: ITopicModel) {
    return await TopicModel.create(props);
  }

  async update(props: ITopicModel) {
    return await TopicModel.update(props, {
      where: {
        id: props.id,
      },
    });
  }

  async delete({ id }: WithIdRequest) {
    return await TopicModel.destroy({
      where: {
        id,
      },
    });
  }
}

export const topicService = new TopicService();
