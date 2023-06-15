import { BaseApi } from '@api/BaseAPI';
import { API_URL } from '@api/constants';

export interface GetViewerResponse {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface UpdateAvatarRequest {
  file: File;
}

export interface UpdateAvatarResponse {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface UpdatePasswordRequest {
  oldPassword: string;
  newPassword: string;
  repeatNewPassword: string;
}

export interface UpdateUserRequest {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

export interface UpdateUserResponse {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}

export class ViewerAPI extends BaseApi {
  getViewer = () => {
    return this.http.get<GetViewerResponse>({
      url: `${API_URL}/auth/user`,
    });
  };

  updateAvatar = (data: UpdateAvatarRequest) => {
    return this.http.put<UpdateAvatarResponse>({
      url: `${API_URL}/user/profile/avatar`,
      body: data,
    });
  };

  updatePassword = (
    data: UpdatePasswordRequest
  ) => {
    return this.http.put<null>({
      url: `${API_URL}/user/password`,
      body: data,
    });
  };

  updateUser = (data: UpdateUserRequest) => {
    return this.http.put<UpdateUserResponse>({
      url: `${API_URL}/user/profile`,
      body: data,
    });
  };
}
