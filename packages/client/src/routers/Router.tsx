import { Fragment, ComponentType } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '@routers/PrivateRoute';
import { EmptyLayout } from '@layouts/Empty';
import { DefaultLayout } from '@layouts/Default';
import { AuthLayout } from '@layouts/Auth';
import { ErrorLayout } from '@layouts/Error';
import {
  Layout,
  RouteItem,
  ROUTES,
} from './routes';
import { GameLayout } from '@layouts/Game/GameLayout';

const mapRoutes = (routes: RouteItem[]) => {
  return routes.map(
    ({
      path,
      isPrivate,
      component: Component,
    }) =>
      isPrivate ? (
        <Route
          key={path}
          element={
            <PrivateRoute page={<Component />} />
          }
          path={path}
        />
      ) : (
        <Route
          key={path}
          element={<Component />}
          path={path}></Route>
      )
  );
};

const LAYOUTS: [Layout, ComponentType][] = [
  [Layout.Default, DefaultLayout],
  [Layout.Auth, AuthLayout],
  [Layout.Error, ErrorLayout],
  [Layout.Game, GameLayout],
  [Layout.Empty, EmptyLayout],
];

export const Router = () => {
  return (
    <Fragment>
      <Routes>
        {LAYOUTS.map(
          ([layoutKey, LayoutComponent]) => (
            <Route
              key={layoutKey}
              element={<LayoutComponent />}>
              {mapRoutes(
                Object.values(ROUTES).filter(
                  ({ layout }) =>
                    layout === layoutKey
                )
              )}
            </Route>
          )
        )}
      </Routes>
    </Fragment>
  );
};
