import { replyService } from '../services/ReplyService';
import { BaseApi } from './BaseApi';

export const replyApi = new BaseApi(replyService);
