import { ViewerModel } from '@pages/Account/models';
import { useMemo } from 'react';

import styles from './UserDataList.module.scss';

type UserDataListProps = ViewerModel;

export const UserDataList = ({
  email,
  login,
  first_name,
  second_name,
  phone,
}: UserDataListProps) => {
  const items = useMemo(
    () => [
      {
        title: 'Почта',
        value: email,
      },
      {
        title: 'Логин',
        value: login,
      },
      {
        title: 'Имя',
        value: first_name,
      },
      {
        title: 'Фамилия',
        value: second_name,
      },
      {
        title: 'Телефон',
        value: phone,
      },
    ],
    [email, first_name, login, phone, second_name]
  );

  return (
    <ul className={styles.list}>
      {items.map(({ title, value }) => (
        <li
          key={title}
          className={styles.listItem}>
          <div className={styles.listItem__title}>
            {title}
          </div>

          <div className={styles.listItem__value}>
            {value}
          </div>
        </li>
      ))}
    </ul>
  );
};
