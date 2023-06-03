import { useEffect, useState } from 'react';

import { useInjection } from '@hooks/useInjection';
import { GetViewerResponse } from '@service/ViewerService';

import { Account, LoadingState } from './view';
import style from './Account.module.scss';

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
    return (
      <div className={style.page}>
        <LoadingState />
      </div>
    );
  }

  return (
    <div className={style.page}>
      <Account viewer={viewer} />
    </div>
  );
};
