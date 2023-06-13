import {
  PropsWithChildren,
  Suspense,
} from 'react';
import styles from './GameLayout.module.scss';
import { PageLoader } from '@components/PageLoader';
import {
  Outlet,
  useLocation,
} from 'react-router-dom';
import { ROUTES } from '@routers/routes';
import { Navbar } from '../../components/Navbar/Navbar';

export function GameLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Navbar view="icons" />
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
