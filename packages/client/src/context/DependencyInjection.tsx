import { createContext } from 'react';

import { ViewerService } from '@service/ViewerService';

export interface DIContainer {
  viewerService: ViewerService;
}

export const DependencyInjection =
  createContext<DIContainer>({} as DIContainer);
