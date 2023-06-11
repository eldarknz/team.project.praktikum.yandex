import { Account, LoadingState } from './view';
import style from './Account.module.scss';
import { useStore } from '../../core/StoreContext';

export const AccountPage = () => {
  document.title = 'Профиль';

  const { viewer } = useStore();

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
