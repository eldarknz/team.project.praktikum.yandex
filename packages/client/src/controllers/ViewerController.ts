import { GetViewerResponse } from '../api/ViewerAPI';
import {
  UpdateAvatarRequest,
  UpdateAvatarResponse,
  UpdatePasswordRequest,
  UpdateUserRequest,
  UpdateUserResponse,
} from '@api/ViewerAPI';

import {
  Handlers,
  BaseController,
} from './BaseController';

export interface EditAvatarRequest
  extends Handlers<UpdateAvatarResponse> {
  values: UpdateAvatarRequest;
}

export interface EditPasswordRequest
  extends Handlers<undefined> {
  values: UpdatePasswordRequest;
}

export interface EditUserRequest
  extends Handlers<UpdateUserResponse> {
  values: UpdateUserRequest;
}

export type GetViewerRequest =
  Handlers<GetViewerResponse>;

export class ViewerController extends BaseController {
  public async editAvatar({
    values,
    onError,
    onSuccess,
  }: EditAvatarRequest): Promise<void> {
    try {
      const response =
        await this.services.viewer.updateAvatar(
          values
        );

      this.store.setViewer(response);

      if (onSuccess) {
        onSuccess(response);
      }
    } catch (error) {
      if (onError) {
        onError(error as Error);
      }
    }
  }

  public async editPassword({
    values,
    onError,
    onSuccess,
  }: EditPasswordRequest): Promise<void> {
    try {
      await this.services.viewer.updatePassword(
        values
      );

      if (onSuccess) {
        onSuccess(undefined);
      }
    } catch (error) {
      if (onError) {
        onError(error as Error);
      }
    }
  }

  public async editUser({
    values,
    onError,
    onSuccess,
  }: EditUserRequest): Promise<void> {
    try {
      const response =
        await this.services.viewer.updateUser(
          values
        );

      this.store.setViewer(response);

      if (onSuccess) {
        onSuccess(response);
      }
    } catch (error) {
      if (onError) {
        onError(error as Error);
      }
    }
  }

  public async getViewer({
    onSuccess,
    onError,
  }: GetViewerRequest): Promise<void> {
    try {
      const viewer =
        await this.services.viewer.getViewer();

      this.store.setViewer(viewer);

      if (onSuccess) {
        onSuccess(viewer);
      }
    } catch (error) {
      if (onError) {
        onError(error as Error);
      }
    }
  }
}
