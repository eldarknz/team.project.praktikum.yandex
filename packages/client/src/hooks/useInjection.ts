import { useContext } from 'react';

import { DependencyInjection } from '@context/DependencyInjection';

export const useInjection = () => {
  return useContext(DependencyInjection);
};
