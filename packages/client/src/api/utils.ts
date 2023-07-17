import { RESOURCES_URL } from '@shared/config/constants';

export const getResourceUrl = (resource: string) => {
  return `${RESOURCES_URL}/${resource}`;
};
