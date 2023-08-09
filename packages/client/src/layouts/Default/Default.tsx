import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@components/Navbar';
import { PageLoader } from '@components/PageLoader';
import { PageErrorBoundary } from '@components/PageErrorBoundary';

import './Default.scss';

export const DefaultLayout = () => {
  return (
    <div className="default-layout">
      <Navbar />

      <main className="default-layout__main">
        <PageErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </PageErrorBoundary>
      </main>
    </div>
  );
};
