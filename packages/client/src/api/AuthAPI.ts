import { BaseAPI } from './BaseAPI';

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

export class AuthAPI extends BaseAPI {
  public signup(data: ISignupData) {
    return fetch(this.API_URL + '/signup', {
      method: 'POST',
      headers: this.HEADERS.JSON,
      body: JSON.stringify(data),
    });
  }

  public signin(data: ISigninData) {
    return fetch(this.API_URL + '/signin', {
      method: 'POST',
      headers: this.HEADERS.JSON,
      body: JSON.stringify(data),
    });
  }

  public logout() {
    return fetch(this.API_URL + '/logout', {
      method: 'POST',
    });
  }
}
