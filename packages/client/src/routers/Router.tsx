import { ComponentType } from 'react';
import { Route, Routes } from 'react-router-dom';
import { EmptyLayout } from '@layouts/Empty';
import { DefaultLayout } from '@layouts/Default';
import { AuthLayout } from '@layouts/Auth';
import { ErrorLayout } from '@layouts/Error';
import { Layout, ROUTES } from './routes';
import { GameLayout } from '@layouts/Game/GameLayout';
import { RouteGuard } from './RouteGuard';

const LAYOUTS: [Layout, ComponentType][] = [
  [Layout.Default, DefaultLayout],
  [Layout.Auth, AuthLayout],
  [Layout.Error, ErrorLayout],
  [Layout.Game, GameLayout],
  [Layout.Empty, EmptyLayout],
];

export const Router = () => {
  return (
    <Routes>
      {LAYOUTS.map(([layoutKey, LayoutComponent]) => (
        <Route key={layoutKey} element={<LayoutComponent />}>
          {Object.values(ROUTES)
            .filter(({ layout }) => layout === layoutKey)
            .map(({ path, accessType, component: Component }) => (
              <Route key={path} element={<RouteGuard accessType={accessType} />} path={path}>
                <Route path="" element={<Component />} />
              </Route>
            ))}
        </Route>
      ))}
    </Routes>
  );
};
