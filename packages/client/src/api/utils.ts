import { RESOURCES_URL } from './constants';

export const getResourceUrl = (resource: string) => {
  return `${RESOURCES_URL}/${resource}`;
};
