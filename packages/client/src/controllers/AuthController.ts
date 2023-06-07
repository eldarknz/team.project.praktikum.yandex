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
      .then(response => {
        if (response.ok) {
          console.log(
            'Ура, вы зарегистрированы!'
          );
        }
        return response.json();
      })
      .then(json => {
        console.log(json);
        return json;
      })
      .catch(err => {
        console.log('Ошибка регистрации', err);
        return err;
      });
  }

  signin(data: ISigninData) {
    return this.api
      .signin(data)
      .then(response => {
        if (response.ok) {
          console.log('Ура, вы авторизованы!');
          return;
        } else {
          return response.json();
        }
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
