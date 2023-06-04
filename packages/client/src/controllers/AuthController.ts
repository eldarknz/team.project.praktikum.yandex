import {
  AuthAPI,
  ISigninData,
  ISignupData,
} from '@api/AuthAPI';

class AuthController {
  private api: AuthAPI;

  constructor() {
    this.api = new AuthAPI();
  }

  signup(data: ISignupData) {
    return this.api
      .signup(data)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        return json;
      })
      .catch(console.log);
  }

  signin(data: ISigninData) {
    return this.api
      .signin(data)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        return json;
      })
      .catch(console.log);
  }

  logout() {
    return this.api
      .logout()
      .then(console.log)
      .catch(err => {
        console.log('logout err', err);
      });
  }
}

export const authController =
  new AuthController();
