import { API_URL, HEADERS } from './constants';

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
  public signup(data: ISignupData) {
    return fetch(API_URL + '/signup', {
      method: 'POST',
      headers: HEADERS.JSON,
      body: JSON.stringify(data),
    });
  }

  public signin(data: ISigninData) {
    return fetch(API_URL + '/signin', {
      method: 'POST',
      headers: HEADERS.JSON,
      body: JSON.stringify(data),
    });
  }

  public logout() {
    return fetch(API_URL + '/logout', {
      method: 'POST',
    });
  }
}
