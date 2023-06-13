import { useMemo, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import { ROUTES } from '@routers/routes';
import { useIsViewerAuthenticated } from '@hooks/useIsViewerAuthenticated';
import { Button } from '@components/Button';
import { useControllers } from '@core/ControllersContext';

import styles from './Navbar.module.scss';
import { StyledLink } from '@components/StyledLink';

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
    ].filter(
      ({ route }) =>
        !route.isPrivate || isAuthenticated
    );
  }, [isAuthenticated]);

  const availableLinks = useMemo(
    () =>
      isAuthenticated
        ? links
        : links.filter(
            ({ route: { isPrivate } }) =>
              !isPrivate
          ),
    [isAuthenticated, links]
  );

  const logout = useCallback(
    () => controllers.auth.logout(),
    [controllers.auth]
  );

  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        {availableLinks.map(
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
          <StyledLink to={ROUTES.SignIn.path}>
            Войти
          </StyledLink>
        </div>
      )}
    </div>
  );
};
