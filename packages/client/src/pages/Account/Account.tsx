import { useAppSelector } from '@shared/store/hooks';

import { Account, LoadingState } from './view';
import style from './Account.module.scss';

export const AccountPage = () => {
  document.title = 'Профиль';

  const viewer = useAppSelector(store => store.userReducer.user);

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
