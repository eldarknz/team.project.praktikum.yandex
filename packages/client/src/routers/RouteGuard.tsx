import { Outlet, Navigate } from 'react-router-dom';

import { useViewer } from '@hooks/useViewer';
import { ROUTES } from '@routers/routes';

export enum RouteAccessGuard {
  Private = 'Private',
  Public = 'Public',
}

export interface RouteGuardProps {
  accessType?: RouteAccessGuard;
}

export const RouteGuard = ({ accessType }: RouteGuardProps) => {
  const { isAuthenticated } = useViewer();

  if (accessType === RouteAccessGuard.Private && !isAuthenticated) {
    return <Navigate to={ROUTES.Home.path} replace />;
  }

  if (accessType === RouteAccessGuard.Public && isAuthenticated) {
    return <Navigate to={ROUTES.Home.path} replace />;
  }

  return <Outlet />;
};
