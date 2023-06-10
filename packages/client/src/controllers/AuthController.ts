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

  public signup(data: ISignupData) {
    return this.api
      .signup(data)
      .then(json => {
        if (json && 'id' in json) {
          console.log(
            'Ура, вы зарегистрированы!',
            json
          );
        }
        return json;
      })
      .catch(err => {
        console.log('Ошибка регистрации', err);
        return err;
      });
  }

  public signin(data: ISigninData) {
    return this.api
      .signin(data)
      .then(data => {
        if (data !== 'OK') {
          console.log('Ошибка авторизации ой');

          return data;
        }

        console.log('Ура, вы авторизованы!');
      })
      .catch(err => {
        console.log('Ошибка авторизации:', err);
        return err;
      });
  }

  logout() {
    return this.api
      .logout()
      .then(console.log)
      .catch(err => {
        console.log('Ошибка логаута', err);
      });
  }
}

export const authController =
  new AuthController();
