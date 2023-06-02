import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '@routers/routes';
import { useIsViewerAuthenticated } from '@hooks/useIsViewerAuthenticated';
import { ReactComponent as HomeSVG } from '@assets/svg/colored/home-icon.svg';
import { ReactComponent as LiderboardSVG } from '@assets/svg/colored/liderboard-icon.svg';
import { ReactComponent as ProfileSVG } from '@assets/svg/colored/profile-icon.svg';
import { ReactComponent as SettingsSVG } from '@assets/svg/colored/settings-icon.svg';

import './Navbar.scss';

export const Navbar = () => {
  const { isAuthenticated } =
    useIsViewerAuthenticated();

  const links = useMemo(
    () => [
      {
        title: 'Главная',
        route: ROUTES.Home,
        icon: <HomeSVG />,
      },
      {
        title: 'Лидерборд',
        route: ROUTES.Leaderboard,
        icon: <LiderboardSVG />,
      },
      {
        title: 'Профиль',
        route: ROUTES.Account,
        icon: <ProfileSVG />,
      },
      {
        title: 'Форум',
        route: ROUTES.Forum,
        icon: <SettingsSVG />,
      },
    ],
    []
  );

  const availableLinks = useMemo(
    () =>
      isAuthenticated
        ? links
        : links.filter(
            ({ route: { isPrivate } }) =>
              !isPrivate
          ),
    [isAuthenticated]
  );

  return (
    <div className="navbar">
      {availableLinks.map(
        ({ title, icon, route: { path } }) => (
          <Link key={title} to={path}>
            {icon || title}
          </Link>
        )
      )}
    </div>
  );
};
