import { Response, Request } from 'express';
import { BaseRESTService } from '../services/BaseRESTService';

type BaseApiImpl = Required<BaseRESTService>;

export class BaseApi implements BaseApiImpl {
  service;
  constructor(props: Required<BaseRESTService>) {
    this.service = props;
  }
  public find = async (req: Request, res: Response) => {
    const { query } = req;
    await this.service
      .find({ id: query.id && !!Number(query.id) ? Number(query.id) : undefined })
      .then(d => res.status(200).send(d))
      .catch(e => res.status(500).send({ message: e }));
  };

  public create = async (req: Request, res: Response) => {
    const { body } = req;
    await this.service
      .create(body)
      .then(data => res.status(200).send(data))
      .catch(e => res.status(500).send({ message: e }));
  };

  public update = async (req: Request, res: Response) => {
    const { body } = req;
    if (!body.id) {
      res.status(400).send({ message: 'id field is required' });
      return;
    }
    await this.service
      .update(body)
      .then(data => res.status(200).send(data))
      .catch(e => res.status(500).send({ message: e }));
  };

  public delete = async (req: Request, res: Response) => {
    const { body } = req;
    if (!body.id) {
      res.status(400).send({ message: 'id field is required' });
      return;
    }
    await this.service
      .delete(body)
      .then(data => res.status(200).send(data))
      .catch(e => res.status(500).send({ message: e }));
  };
}
