import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@components/Navbar';
import { PageLoader } from '@components/PageLoader';
import { PageErrorBoundary } from '@components/PageErrorBoundary';
import './Auth.scss';

export const AuthLayout = () => {
  return (
    <PageErrorBoundary>
      <div className="auth-layout">
        <Navbar />
        <main className="auth-layout__main">
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </PageErrorBoundary>
  );
};
