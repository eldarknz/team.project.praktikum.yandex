import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@components/Navbar';
import { PageLoader } from '@components/PageLoader';
import { PageErrorBoundary } from '@components/PageErrorBoundary';
import './Auth.scss';

export const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <Navbar />

      <main className="auth-layout__main">
        <PageErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </PageErrorBoundary>
      </main>
    </div>
  );
};
