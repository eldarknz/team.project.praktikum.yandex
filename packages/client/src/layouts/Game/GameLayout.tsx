import { Suspense } from 'react';
import styles from './GameLayout.module.scss';
import { PageLoader } from '@components/PageLoader';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@components/Navbar';

export function GameLayout() {
  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.card}>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
