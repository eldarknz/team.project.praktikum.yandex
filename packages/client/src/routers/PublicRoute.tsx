import {
  Fragment,
  PropsWithChildren,
} from 'react';
import { Navigate } from 'react-router-dom';

import { useIsViewerAuthenticated } from '@hooks/useIsViewerAuthenticated';
import { ROUTES } from '@routers/routes';

export const PublicRoute = ({
  children,
}: PropsWithChildren) => {
  const isAuthenticated =
    useIsViewerAuthenticated();

  if (isAuthenticated) {
    return <Navigate to={ROUTES.Home.path} />;
  }

  return <Fragment>{children}</Fragment>;
};
