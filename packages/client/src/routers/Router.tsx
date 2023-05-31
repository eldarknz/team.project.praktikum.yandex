import { Fragment, ComponentType } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PrivateRoute } from '@routers/PrivateRoute';
import { DefaultLayout } from '@layouts/Default';
import { AuthLayout } from '@layouts/Auth';
import { ErrorLayout } from '@layouts/Error';

import {
  Layout,
  RouteItem,
  ROUTES,
} from './routes';

const mapRoutes = (routes: RouteItem[]) => {
  return routes.map(
    ({ path, isPrivate, component: Component }) =>
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
];

export const Router = () => {
  return (
    <Fragment>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route
            element={<AccountPage />}
            path={ROUTES.Account}
          />
          <Route
            element={<ForumPage />}
            path={ROUTES.Forum}
          />
          <Route
            element={<LeaderboardPage />}
            path={ROUTES.Leaderboard}
          />
          <Route
            element={<HomePage />}
            path={ROUTES.Home}
          />
        </Route>

        <Route element={<AuthLayout />}>
          <Route
            element={<SignInPage />}
            path={ROUTES.SignIn}
          />
          <Route
            element={<SignUpPage />}
            path={ROUTES.SignUp}
          />
        </Route>

        <Route element={<ErrorLayout />}>
          <Route
            element={<Error404Page />}
            path={'*'}
          />
        </Route>
      </Routes>
    </Fragment>
  );
};
