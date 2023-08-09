import { ISignupData, ISigninData } from '@api/AuthAPI';
import { GetViewerResponse } from '@api/ViewerAPI';
import { setUser } from '@workspace/shared/src/store/reducers';

import { Handlers, BaseController } from './BaseController';

export interface SignUpRequest extends Handlers<GetViewerResponse> {
  values: ISignupData;
}

export interface SignInRequest extends Handlers<GetViewerResponse> {
  values: ISigninData;
}

export type LogoutRequest = Handlers<undefined>;

const getOAuthRedirectUrl = () => window.location.origin;

export class AuthController extends BaseController {
  public async signup({ onError, onSuccess, values }: SignUpRequest) {
    return this.services.auth
      .signup(values)
      .then(async () => {
        const user = await this.services.viewer.getViewer();

        this.store.dispatch(setUser(user));

        if (onSuccess) {
          onSuccess(user);
        }
      })
      .catch(err => {
        if (onError) {
          onError(err as Error);
        }
      });
  }

  public async signin({ onError, onSuccess, values }: SignInRequest) {
    return this.services.auth
      .signin(values)
      .then(async () => {
        const user = await this.services.viewer.getViewer();

        this.store.dispatch(setUser(user));

        if (onSuccess) {
          onSuccess(user);
        }
      })
      .catch(err => {
        if (onError) {
          onError(err as Error);
        }
      });
  }

  logout({ onError, onSuccess }: LogoutRequest = {}) {
    return this.services.auth
      .logout()
      .then(async () => {
        this.store.dispatch(setUser(null));

        if (onSuccess) {
          onSuccess(undefined);
        }
      })
      .catch(err => {
        if (onError) {
          onError(err as Error);
        }
      });
  }

  public async signinWithYandex() {
    const { service_id } = await this.services.auth.getServiceId({
      redirectUri: getOAuthRedirectUrl(),
    });

    window.location.href = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${service_id}&redirect_uri=${getOAuthRedirectUrl()}`;
  }

  public async getUserFromOAuth() {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (!code) return;

    try {
      await this.services.auth.authWithYandex({
        code,
        redirectUri: getOAuthRedirectUrl(),
      });
    } catch {
      //
    }

    window.history.replaceState(null, '', window.location.pathname);
  }
}
