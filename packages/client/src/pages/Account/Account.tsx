import { useEffect, useState } from 'react';

import { useInjection } from '@hooks/useInjection';
import { GetViewerResponse } from '@service/ViewerService';

import { Account, LoadingState } from './view';

export const AccountPage = () => {
  document.title = 'Профиль';

  const { viewerService } = useInjection();
  const [viewer, setViewer] = useState<
    undefined | GetViewerResponse
  >();

  useEffect(() => {
    viewerService.getViewer().then(setViewer);
  }, []);

  if (!viewer) {
    return <LoadingState />;
  }

  return <Account viewer={viewer} />;
};
