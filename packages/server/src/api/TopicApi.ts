import { Response, Request } from 'express';
import { topicService } from '../services/TopicSevice';
import { BaseApi } from './BaseApi';

const topicApiBase = new BaseApi(topicService);

export const topicApi = {
  ...topicApiBase,
  comments: async (req: Request, res: Response) => {
    const { query } = req;
    const id = query.id && !!Number(query.id) ? Number(query.id) : undefined;

    if (!id) {
      return res.status(500).send({ message: 'Invalid topic id' });
    }

    return topicService.comments({ id }).then(d => res.status(200).send(d));
  },
};
