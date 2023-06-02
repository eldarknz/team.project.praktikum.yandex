export type { GetViewerResponse } from './get-viewer';
export type { UpdatePasswordRequest } from './update-password';
export type {
  UpdateViewerRequest,
  UpdateViewerResponse,
} from './update-viewer';

import { getViewer } from './get-viewer';
import { updateViewer } from './update-viewer';
import { updatePassword } from './update-password';

export const viewerService = {
  getViewer,
  updateViewer,
  updatePassword,
};

export type ViewerService = typeof viewerService;
