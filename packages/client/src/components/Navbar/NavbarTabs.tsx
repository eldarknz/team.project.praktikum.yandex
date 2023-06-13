import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import { ROUTES } from '@routers/routes';
import { useIsViewerAuthenticated } from '@hooks/useIsViewerAuthenticated';

import style from './NavbarTabs.module.scss';

const LINKS = [
  {
    title: 'Лендинг',
    route: ROUTES.Home,
  },
  {
    title: 'Игра',
    route: ROUTES.Start,
  },
  {
    title: 'Лидерборд',
    route: ROUTES.Leaderboard,
  },
  {
    title: 'Профиль',
    route: ROUTES.Account,
  },
  {
    title: 'Форум',
    route: ROUTES.Forum,
  },
  {
    title: 'Sign-In',
    route: ROUTES.SignIn,
  },
  {
    title: 'Sign-Up',
    route: ROUTES.SignUp,
  },
];

export const NavbarTabs = () => {
  const { isAuthenticated } =
    useIsViewerAuthenticated();

  const availableLinks = useMemo(
    () =>
      isAuthenticated
        ? LINKS
        : LINKS.filter(
            ({ route: { isPrivate } }) =>
              !isPrivate
          ),
    [isAuthenticated]
  );

  return (
    <div className={style.navbarTabs}>
      {availableLinks.map(
        ({ title, route: { path } }) => (
          <NavLink
            key={title}
            to={path}
            className={({ isActive }) =>
              cn({
                [style.navbarItem]: true,
                [style.navbarItemActive]:
                  isActive,
              })
            }>
            {title}
          </NavLink>
        )
      )}
    </div>
  );
};
