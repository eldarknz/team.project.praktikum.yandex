import { BaseApi } from '@api/BaseAPI';
import { API_URL } from '@workspace/shared';

export interface GetViewerResponse {
  id: number;
  email: string | null;
  login: string | null;
  first_name: string | null;
  second_name: string | null;
  display_name: string | null;
  phone: string | null;
  avatar: string | null;
}

export interface UpdateAvatarRequest {
  file: File;
}

export interface UpdateAvatarResponse {
  id: number;
  email: string | null;
  login: string | null;
  first_name: string | null;
  second_name: string | null;
  display_name: string | null;
  phone: string | null;
  avatar: string | null;
}

export interface UpdatePasswordRequest {
  oldPassword: string;
  newPassword: string;
}

export interface UpdateUserRequest {
  first_name: string;
  second_name: string;
  display_name: string | null;
  login: string;
  email: string;
  phone: string;
}

export interface UpdateUserResponse {
  id: number;
  email: string | null;
  login: string | null;
  first_name: string | null;
  second_name: string | null;
  display_name: string | null;
  phone: string | null;
  avatar: string | null;
}

export class ViewerAPI extends BaseApi {
  getViewer = () => {
    return this.http.get<GetViewerResponse>({
      url: `${API_URL}/auth/user`,
    });
  };

  updateAvatar = (data: UpdateAvatarRequest) => {
    const formData = new FormData();
    formData.set('avatar', data.file);

    return this.http.put<UpdateAvatarResponse>({
      url: `${API_URL}/user/profile/avatar`,
      body: formData,
      headers: 'NONE',
    });
  };

  updatePassword = (data: UpdatePasswordRequest) => {
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
