import { ComponentType, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { EmptyLayout } from '@layouts/Empty';
import { DefaultLayout } from '@layouts/Default';
import { AuthLayout } from '@layouts/Auth';
import { ErrorLayout } from '@layouts/Error';
import { GameLayout } from '@layouts/Game/GameLayout';

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import {
  Layout,
  RouteAccessType,
  RouteItem,
  ROUTES,
} from './routes';

const flattenRoutes = (
  obj: object
): RouteItem[] => {
  const arr: RouteItem[] = [];

  if ('component' in obj) {
    const route = obj as RouteItem;
    arr.push(route);
  } else {
    for (const value of Object.values(obj)) {
      arr.push(...flattenRoutes(value));
    }
  }

  return arr;
};

const mapRoutes = (routes: RouteItem[]) => {
  return routes.map(
    ({ path, access, component: Component }) => {
      if (
        access === RouteAccessType.PrivateOnly
      ) {
        return (
          <Route
            key={path}
            path={path}
            element={
              <PrivateRoute>
                <Component />
              </PrivateRoute>
            }
          />
        );
      }

      if (access === RouteAccessType.PublicOnly) {
        return (
          <Route
            key={path}
            path={path}
            element={
              <PublicRoute>
                <Component />
              </PublicRoute>
            }
          />
        );
      }

      return (
        <Route
          key={path}
          path={path}
          element={<Component />}
        />
      );
    }
  );
};

const LAYOUTS: [Layout, ComponentType][] = [
  [Layout.Default, DefaultLayout],
  [Layout.Auth, AuthLayout],
  [Layout.Game, GameLayout],
  [Layout.Empty, EmptyLayout],
  [Layout.Error, ErrorLayout],
];

export const Router = () => {
  const [routes] = useMemo(() => {
    const { ...routes } = ROUTES;
    return [routes];
  }, []);

  const flatRoutes = useMemo(
    () =>
      flattenRoutes(routes).reduce(
        (acc, route: RouteItem) => {
          if (!(route.layout in acc)) {
            acc[route.layout] = [];
          }

          acc[route.layout].push(route);
          return acc;
        },
        {} as Record<Layout, RouteItem[]>
      ),
    [routes]
  );

  return (
    <Routes>
      {LAYOUTS.map(
        ([layoutKey, LayoutComponent]) => (
          <Route
            key={layoutKey}
            element={<LayoutComponent />}>
            {mapRoutes(
              flatRoutes[layoutKey] || []
            )}
          </Route>
        )
      )}
    </Routes>
  );
};
