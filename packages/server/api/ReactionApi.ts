import { reactionService } from '../services/ReactionSevice';
import { BaseApi } from './BaseApi';

export const reactionApi = new BaseApi(reactionService);
