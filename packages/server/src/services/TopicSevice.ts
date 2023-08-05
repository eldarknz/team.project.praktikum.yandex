import { ITopicModel, TopicModel } from '@db/models';
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

  async create(props: Omit<ITopicModel, 'authorId'>, { id }: { id: number }) {
    return TopicModel.create({
      ...props,
      authorId: id,
    });
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
