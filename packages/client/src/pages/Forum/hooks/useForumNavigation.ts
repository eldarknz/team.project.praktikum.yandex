import { generatePath, useNavigate } from 'react-router-dom';

import { routes } from '../routes';

export const useForumNavigation = () => {
  const navigate = useNavigate();

  return {
    toForm: () => navigate,
    toTopic: ({ id }: { id: number }) => navigate(generatePath(routes.topic, { id })),
  };
};
