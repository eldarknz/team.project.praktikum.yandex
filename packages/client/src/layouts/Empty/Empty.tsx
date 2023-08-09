import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { PageLoader } from '@components/PageLoader';
import { PageErrorBoundary } from '@components/PageErrorBoundary';

import style from './Empty.module.scss';

export const EmptyLayout = () => {
  return (
    <div className={style.layout}>
      <main>
        <PageErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </PageErrorBoundary>
      </main>
    </div>
  );
};
