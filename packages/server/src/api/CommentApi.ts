import { commentService } from '../services/CommentService';
import { BaseApi } from './BaseApi';

export const commentApi = new BaseApi(commentService);
