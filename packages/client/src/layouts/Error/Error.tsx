import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { PageLoader } from '@components/PageLoader';
import { Navbar } from '@components/Navbar';
import { PageErrorBoundary } from '@components/PageErrorBoundary';

import style from './Error.module.scss';

export const ErrorLayout = () => {
  document.title = 'Ошибка 404';

  return (
    <div className={style.layout}>
      <Navbar />

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
