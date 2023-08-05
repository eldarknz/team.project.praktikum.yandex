import { BaseApi } from '@api/BaseAPI';

import { Comment } from '@workspace/shared/src/models';

export type CreateCommentRequest = Pick<Comment, 'text' | 'topicId' | 'authorId'>;

export interface GetCommentListRequest {
  topicId: number;
}

const path = '/api/v1/comment';

export class CommentAPI extends BaseApi {
  public create(data: CreateCommentRequest) {
    return this.http.post<Comment>({
      url: path,
      body: data,
    });
  }

  public list(data: GetCommentListRequest) {
    return this.http.get<Comment[]>({
      url: `${path}?${new URLSearchParams(data as any).toString()}`,
    });
  }
}
