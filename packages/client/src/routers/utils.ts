import {
  RouteAccessType,
  RouteItem,
} from './routes';

export const canShowRoute = ({
  route: { access },
  isAuthenticated,
}: {
  route: RouteItem;
  isAuthenticated: boolean;
}) => {
  if (RouteAccessType.Common === access) {
    return true;
  }

  if (RouteAccessType.PublicOnly === access) {
    return !isAuthenticated;
  }

  return RouteAccessType.PrivateOnly === access;
};
