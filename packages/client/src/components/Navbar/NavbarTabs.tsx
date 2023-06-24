import { useMemo, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import { ROUTES } from '@routers/routes';
import { useIsViewerAuthenticated } from '@hooks/useIsViewerAuthenticated';
import { Button } from '@components/Button';
import { useControllers } from '@core/ControllersContext';
import styles from './Navbar.module.scss';
import { StyledLink } from '@components/StyledLink';
import { canShowRoute } from '../../routers/utils';

export const NavbarTabs = () => {
  const isAuthenticated =
    useIsViewerAuthenticated();
  const controllers = useControllers();

  const links = useMemo(() => {
    return [
      {
        title: 'Главная',
        route: ROUTES.Home,
      },
      {
        title: 'Игра',
        route: ROUTES.Game.Start,
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
    ].filter(({ route }) => {
      return canShowRoute({
        route,
        isAuthenticated,
      });
    });
  }, [isAuthenticated]);

  const logout = useCallback(
    () => controllers.auth.logout(),
    [controllers.auth]
  );

  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        {links.map(
          ({ title, route: { path } }) => (
            <NavLink
              key={title}
              to={path}
              className={({ isActive }) =>
                cn({
                  [styles.linkItem]: true,
                  [styles.linkItemActive]:
                    isActive,
                })
              }>
              {title}
            </NavLink>
          )
        )}
      </div>

      {isAuthenticated ? (
        <div className={styles.button}>
          <Button onClick={logout}>Выйти</Button>
        </div>
      ) : (
        <div className={styles.button}>
          <StyledLink
            to={ROUTES.Auth.SignIn.path}>
            Войти
          </StyledLink>
        </div>
      )}
    </div>
  );
};
