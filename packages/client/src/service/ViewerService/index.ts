export type { GetViewerResponse } from './get-viewer';
export type { UpdatePasswordRequest } from './update-password';
export type {
  UpdateUserRequest,
  UpdateUserResponse,
} from './update-user';
export type {
  UpdateAvatarRequest,
  UpdateAvatarResponse,
} from './update-avatar';

import { getViewer } from './get-viewer';
import { updateUser } from './update-user';
import { updatePassword } from './update-password';
import { updateAvatar } from './update-avatar';

export const viewerService = {
  getViewer,
  updateUser,
  updatePassword,
  updateAvatar,
};

export type ViewerService = typeof viewerService;
