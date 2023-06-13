import { useEffect, useState } from 'react';

import { useControllers } from '@core/ControllersContext';
import { GetViewerResponse } from '@api/ViewerAPI';

import { Account, LoadingState } from './view';
import style from './Account.module.scss';

export const AccountPage = () => {
  document.title = 'Профиль';

  const controllers = useControllers();
  const [viewer, setViewer] = useState<
    undefined | GetViewerResponse
  >();

  useEffect(() => {
    controllers.viewer.getViewer({
      onSuccess: setViewer,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
