import { userService } from '../services/UserSevice';
import { BaseApi } from './BaseApi';

export const userApi = new BaseApi(userService);
