import { reactionService } from '../services/ReactionService';
import { BaseApi } from './BaseApi';

export const reactionApi = new BaseApi(reactionService);
