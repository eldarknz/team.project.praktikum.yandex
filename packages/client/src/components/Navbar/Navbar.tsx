import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import { ROUTES } from '@routers/routes';
import { useIsViewerAuthenticated } from '@hooks/useIsViewerAuthenticated';

import './Navbar.scss';

const LINKS = [
  {
    title: 'Главная',
    route: ROUTES.Home,
  },
  {
    title: 'Игра',
    route: ROUTES.Game,
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

export const Navbar = () => {
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
    <div className="navbar">
      {availableLinks.map(
        ({ title, route: { path } }) => (
          <NavLink
            key={title}
            to={path}
            className={({ isActive }) =>
              cn({
                'navbar-item': true,
                'navbar-item--active': isActive,
              })
            }>
            {title}
          </NavLink>
        )
      )}
    </div>
  );
};
