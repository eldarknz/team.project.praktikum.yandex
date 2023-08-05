import { BaseApi } from '@api/BaseAPI';

export interface TopicModel {
  id: number;
  authorId: number;
  title: string;
  content: string;
  message_count: number;
  createdAt: string;
  updatedAt: string;
}

export type CreateTopicRequest = Pick<TopicModel, 'title' | 'content'>;

export interface UpdateTopicRequest {
  id: number;
  postName: string;
}

export interface DeleteTopicRequest {
  id: number;
}

export interface GetTopicRequest {
  id: number;
}

const path = '/api/v1/topic';

export class TopicAPI extends BaseApi {
  public create(data: CreateTopicRequest) {
    return this.http.post<TopicModel>({
      url: path,
      body: data,
    });
  }

  public update(data: UpdateTopicRequest) {
    return this.http.put<TopicModel>({
      url: path,
      body: data,
    });
  }

  public delete(data: DeleteTopicRequest) {
    return this.http.delete<TopicModel>({
      url: path,
      body: data,
    });
  }

  public get(data: GetTopicRequest) {
    return this.http.get<TopicModel>({
      url: `${path}?${new URLSearchParams(data as any).toString()}`,
    });
  }

  public list() {
    return this.http.get<TopicModel[]>({
      url: path,
    });
  }
}
