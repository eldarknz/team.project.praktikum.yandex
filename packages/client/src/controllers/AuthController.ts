import {
  ISignupData,
  ISigninData,
} from '@api/AuthAPI';
import { GetViewerResponse } from '@api/ViewerAPI';

import {
  Handlers,
  BaseController,
} from './BaseController';
import { setUser } from '@service/store/reducers/userSlice';

export interface SignUpRequest
  extends Handlers<GetViewerResponse> {
  values: ISignupData;
}

export interface SignInRequest
  extends Handlers<GetViewerResponse> {
  values: ISigninData;
}

export type LogoutRequest = Handlers<undefined>;

const OAUTH_REDIRECT_URL = window.location.origin;

export class AuthController extends BaseController {
  public async signup({
    onError,
    onSuccess,
    values,
  }: SignUpRequest) {
    return this.services.auth
      .signup(values)
      .then(async () => {
        const user =
          await this.services.viewer.getViewer();

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

  public async signin({
    onError,
    onSuccess,
    values,
  }: SignInRequest) {
    return this.services.auth
      .signin(values)
      .then(async () => {
        const user =
          await this.services.viewer.getViewer();

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

  logout({
    onError,
    onSuccess,
  }: LogoutRequest = {}) {
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
    const { service_id } =
      await this.services.auth.getServiceId({
        redirectUri: OAUTH_REDIRECT_URL,
      });

    window.location.href = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${service_id}&redirect_uri=${OAUTH_REDIRECT_URL}`;
  }

  public async getUserFromOAuth() {
    const params = new URLSearchParams(
      window.location.search,
    );
    const code = params.get('code');

    if (!code) return;

    try {
      await this.services.auth.authWithYandex({
        code,
        redirectUri: OAUTH_REDIRECT_URL,
      });
    } catch {
      //
    }

    window.history.replaceState(
      null,
      '',
      window.location.pathname,
    );
  }
}
