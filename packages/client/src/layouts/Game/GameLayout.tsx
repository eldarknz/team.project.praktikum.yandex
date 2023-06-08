import {
  PropsWithChildren,
  Suspense,
} from 'react';
import styles from './GameLayout.module.scss';
import { PageLoader } from '@components/PageLoader';
import {
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { ROUTES } from '@routers/routes';
import { ReactComponent as HomeSVG } from '@assets/svg/colored/home-icon.svg';
import { ReactComponent as LiderboardSVG } from '@assets/svg/colored/liderboard-icon.svg';
import { ReactComponent as ProfileSVG } from '@assets/svg/colored/profile-icon.svg';
import { ReactComponent as SettingsSVG } from '@assets/svg/colored/settings-icon.svg';

export function GameLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to={ROUTES.Home.path}>
          <HomeSVG />
        </Link>
        <Link to={ROUTES.Account.path}>
          <ProfileSVG />
        </Link>
        <Link to={ROUTES.Leaderboard.path}>
          <LiderboardSVG />
        </Link>
        <Link to={ROUTES.Forum.path}>
          <SettingsSVG />
        </Link>
      </div>
      <Container>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
}

type ContainerProps = PropsWithChildren;

const Container = ({
  children,
}: ContainerProps) => {
  const location = useLocation();
  if (location.pathname === ROUTES.Game.path) {
    return <>{children}</>;
  }

  return (
    <div className={styles.card}>{children}</div>
  );
};
