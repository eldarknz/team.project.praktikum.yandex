import { API_URL } from '@api/constants';

import { TRANSPORT } from './_constants';

const GET_VIEWER_URL = `${API_URL}/auth/user`;

export const getViewer = () => {
  return TRANSPORT.get({
    url: GET_VIEWER_URL,
  });
};
