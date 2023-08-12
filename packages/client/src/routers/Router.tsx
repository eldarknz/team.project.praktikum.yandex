import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes';
import { RouteGuard } from './RouteGuard';
import { LAYOUTS } from '@layouts/index';

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
