import { RESOURCES_URL } from '@workspace/shared/src/config';

export const getResourceUrl = (resource: string) => {
  return `${RESOURCES_URL}/${resource}`;
};
