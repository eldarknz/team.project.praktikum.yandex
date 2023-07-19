import { replyService } from '../services/ReplyService';
import { BaseApi } from './BaseApi';

const replyApi = new BaseApi(replyService);

export default replyApi;
