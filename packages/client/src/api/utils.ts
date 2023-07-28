import { RESOURCES_URL } from '@workspace/shared';

export const getResourceUrl = (resource: string) => {
  return `${RESOURCES_URL}/${resource}`;
};
