import { topicService } from '../services/TopicSevice';
import { BaseApi } from './BaseApi';

export const topicApi = new BaseApi(topicService);
