import { ViewerModel } from '@pages/Account/models';
import { useMemo } from 'react';

import styles from './UserDataList.module.scss';

type UserDataListProps = ViewerModel;

export const UserDataList = ({
  email,
  login,
  first_name: firstName,
  second_name: secondName,
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
        value: firstName,
      },
      {
        title: 'Фамилия',
        value: secondName,
      },
      {
        title: 'Телефон',
        value: phone,
      },
    ],
    [email, login, firstName, secondName, phone]
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
