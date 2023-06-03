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
  static API_URL =
    'https://ya-praktikum.tech/api/v2/auth';

  public signup(data: ISignupData) {
    return fetch(AuthAPI.API_URL + '/signup', {
      method: 'POST',
      headers: {
        'Content-Type':
          'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    });
  }

  public signin(data: ISigninData) {
    console.log('outcoming signin data', data);
    return fetch(AuthAPI.API_URL + '/signin', {
      method: 'POST',
      headers: {
        'Content-Type':
          'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    });
  }

  public logout() {
    return fetch(AuthAPI.API_URL + '/logout', {
      method: 'POST',
    });
  }
}
