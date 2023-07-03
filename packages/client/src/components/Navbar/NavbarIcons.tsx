import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '@routers/routes';
import { useIsViewerAuthenticated } from '@hooks/useIsViewerAuthenticated';
import { ReactComponent as HomeSVG } from '@assets/svg/colored/home-icon.svg';
import { ReactComponent as LeaderboardSVG } from '@assets/svg/colored/leaderboard-icon.svg';
import { ReactComponent as ProfileSVG } from '@assets/svg/colored/profile-icon.svg';
import { ReactComponent as SettingsSVG } from '@assets/svg/colored/settings-icon.svg';

import style from './NavbarIcons.module.scss';
import { canShowRoute } from '../../routers/utils';

export const NavbarIcons = () => {
  const isAuthenticated =
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
        icon: <LeaderboardSVG />,
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
        : links.filter(({ route }) => {
            return canShowRoute({
              isAuthenticated,
              route,
            });
          }),
    [isAuthenticated, links]
  );

  return (
    <div className={style.navbarIcons}>
      {availableLinks.map(
        ({ title, icon, route: { path } }) => (
          <Link
            key={title}
            to={path}
            className={style.navbarItem}>
            {icon || title}
          </Link>
        )
      )}
    </div>
  );
};
