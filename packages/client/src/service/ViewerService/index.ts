export type { GetViewerResponse } from './get-viewer';
export type { UpdatePasswordRequest } from './update-password';
export type {
  UpdateViewerRequest,
  UpdateViewerResponse,
} from './update-viewer';
export type {
  UpdateAvatarRequest,
  UpdateAvatarResponse,
} from './update-avatar';

import { getViewer } from './get-viewer';
import { updateViewer } from './update-viewer';
import { updatePassword } from './update-password';
import { updateAvatar } from './update-avatar';

export const viewerService = {
  getViewer,
  updateViewer,
  updatePassword,
  updateAvatar,
};

export type ViewerService = typeof viewerService;
