import { HTTPTransport } from '@core/HTTPTransport';
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

export class AuthAPI {
  private http: HTTPTransport;

  constructor() {
    this.http = new HTTPTransport();
  }

  public signup(data: ISignupData) {
    return this.http.post({
      url: API_URL + '/signup',
      body: JSON.stringify(data),
    });
  }

  public signin(data: ISigninData) {
    return this.http.post({
      url: API_URL + '/signin',
      body: JSON.stringify(data),
    });
  }

  public logout() {
    return this.http.post({
      url: API_URL + '/logout',
    });
  }
}
