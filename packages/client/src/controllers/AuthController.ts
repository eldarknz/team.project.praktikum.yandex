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
    this.api
      .signup(data)
      .then(response => response.json())
      .then(console.log)
      .catch(console.log);
  }

  signin(data: ISigninData) {
    this.api
      .signin(data)
      .then(response => response.json())
      .then(console.log)
      .catch(console.log);
  }

  logout() {
    this.api
      .logout()
      .then(console.log)
      .catch(err => {
        console.log('logout err', err);
      });
  }
}

export const authController =
  new AuthController();
