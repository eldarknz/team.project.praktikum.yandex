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
import { useAppDispatch } from '@service/store/hooks';

export interface SignUpRequest
  extends Handlers<GetViewerResponse> {
  values: ISignupData;
}

export interface SignInRequest
  extends Handlers<GetViewerResponse> {
  values: ISigninData;
}

export type LogoutRequest = Handlers<undefined>;

export class AuthController extends BaseController {
  public async signup({
    onError,
    onSuccess,
    values,
  }: SignUpRequest) {
    return this.services.auth
      .signup(values)
      .then(async () => {
        const viewer =
          await this.services.viewer.getViewer();

        const dispatch = useAppDispatch();

        dispatch(setUser(viewer));

        if (onSuccess) {
          onSuccess(viewer);
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
        const viewer =
          await this.services.viewer.getViewer();

        this.store.dispatch(setUser(viewer));

        if (onSuccess) {
          onSuccess(viewer);
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
}
