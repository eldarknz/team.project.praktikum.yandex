import { http } from '@core/HTTPTransport';
import { API_URL } from './constants';

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

export type SignUpResponse =
  | SignUpSuccess
  | AuthError;

export type SigninResponse = AuthError | string;

export class AuthAPI {
  private http;

  constructor() {
    this.http = http;
  }

  public signup(data: ISignupData) {
    return this.http.post<
      SignUpResponse,
      ISignupData
    >({
      url: `${API_URL}/auth/signup`,
      body: data,
    });
  }

  public signin(data: ISigninData) {
    return this.http.post<
      SigninResponse,
      ISigninData
    >({
      url: `${API_URL}/auth/signin`,
      body: data,
    });
  }

  public logout() {
    return this.http.post({
      url: `${API_URL}/auth/logout`,
    });
  }
}
