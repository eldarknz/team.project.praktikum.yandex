import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styles from './Account.module.scss';

const viewer = {
  firstName: 'Вова Маяковский',
  email: 'mayak@yandex.ru',
  login: 'Mayak',
  secondName: 'Вова',
  phone: '+7 (909) 967 30 30',
};

export const AccountPage = () => {
  document.title = 'Профиль';

  const items = useMemo(
    () => [
      { title: 'Почта', value: viewer.email },
      { title: 'Логин', value: viewer.login },
      { title: 'Имя', value: viewer.firstName },
      {
        title: 'Фамилия',
        value: viewer.secondName,
      },
      { title: 'Телефон', value: viewer.phone },
    ],
    []
  );

  return (
    <div className={styles.page}>
      <div className={styles.avatar}></div>
      <h4 className={styles.userName}>
        {viewer.firstName} {viewer.secondName}
      </h4>

      <ul className={styles.list}>
        {items.map(({ title, value }) => (
          <li
            key={title}
            className={styles.listItem}>
            <div
              className={styles.listItem__title}>
              {title}
            </div>

            <div
              className={styles.listItem__value}>
              {value}
            </div>
          </li>
        ))}
      </ul>

      <Link to={'/'}>Изменить данные</Link>
      <Link to={'/'}>Изменить пароль</Link>
    </div>
  );
};
