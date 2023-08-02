import { BaseApi } from '@api/BaseAPI';

export interface TopicModel {
  id: number;
  author: string;
  post_name: string;
  message_count: number;
}

export interface CreateTopicRequest {
  author: string;
  post_name: string;
  message_count: number;
}

export interface UpdateTopicRequest {
  id: number;
  author: string;
  post_name: string;
  message_count: number;
}

export interface DeleteTopicRequest {
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

  public get(data: DeleteTopicRequest) {
    return this.http.get<TopicModel>({
      url: path,
      body: data,
    });
  }
}
