import { Fragment, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useIsViewerAuthenticated } from '@hooks/useIsViewerAuthenticated';
import { ROUTES } from '@routers/routes';

interface PrivateRouteProps {
  page: ReactNode;
}

export const PrivateRoute = ({ page }: PrivateRouteProps) => {
  const isAuthenticated = useIsViewerAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.Home.path} />;
  }

  return <Fragment>{page}</Fragment>;
};
