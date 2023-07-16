import { API_URL } from '@shared/config/constants';

import { BaseApi } from './BaseAPI';

export interface ISignupData {
  [key: string]: string;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface ISigninData {
  [key: string]: string;
  login: string;
  password: string;
}

export interface AuthError {
  error?: string;
  reason: string;
}

export interface SignUpSuccess {
  id: number;
}

export type SignUpResponse = SignUpSuccess | AuthError;

export type SigninResponse = AuthError | string;

export interface GetServiceResponse {
  service_id: string;
}

export interface GetServiceRequest {
  redirectUri: string;
}

export interface AuthWithYandexRequest {
  code: string;
  redirectUri: string;
}

export class AuthAPI extends BaseApi {
  public signup(data: ISignupData) {
    return this.http.post<SignUpResponse, ISignupData>({
      url: `${API_URL}/auth/signup`,
      body: data,
    });
  }

  public signin(data: ISigninData) {
    console.log('signin', `${API_URL}/auth/signup`);

    return this.http.post<SigninResponse, ISigninData>({
      url: `${API_URL}/auth/signin`,
      body: data,
    });
  }

  public logout() {
    return this.http.post({
      url: `${API_URL}/auth/logout`,
    });
  }

  public getServiceId({ redirectUri }: GetServiceRequest) {
    return this.http.get<GetServiceResponse>({
      url: `${API_URL}/oauth/yandex/service-id?${new URLSearchParams({
        redirect_uri: redirectUri,
      })}`,
    });
  }

  public authWithYandex(data: AuthWithYandexRequest) {
    return this.http.post({
      url: `${API_URL}/oauth/yandex`,
      body: {
        code: data.code,
        redirect_uri: data.redirectUri,
      },
    });
  }
}
