import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '@routers/routes';
import { useViewer } from '@hooks/useViewer';
import { ReactComponent as HomeSVG } from '@assets/svg/colored/home-icon.svg';
import { ReactComponent as LeaderboardSVG } from '@assets/svg/colored/leaderboard-icon.svg';
import { ReactComponent as ProfileSVG } from '@assets/svg/colored/profile-icon.svg';
import { ReactComponent as SettingsSVG } from '@assets/svg/colored/settings-icon.svg';
import { RouteAccessGuard } from '@routers/RouteGuard';

import style from './NavbarIcons.module.scss';

export const NavbarIcons = () => {
  const { isAuthenticated } = useViewer();

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
        : links.filter(
            ({ route: { accessType } }) => !accessType || accessType === RouteAccessGuard.Private
          ),
    [isAuthenticated, links]
  );

  return (
    <div className={style.navbarIcons}>
      {availableLinks.map(({ title, icon, route: { path } }) => (
        <Link key={title} to={path} className={style.navbarItem}>
          {icon || title}
        </Link>
      ))}
    </div>
  );
};
