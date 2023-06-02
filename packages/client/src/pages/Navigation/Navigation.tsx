import { Link } from 'react-router-dom';

import { ROUTES } from '@routers/routes';

export const NavigationPage = () => {
  document.title = 'Навигация на первое время';

  return (
    <div>
      {Object.values(ROUTES).map(({ path }) => (
        <div key={path}>
          <Link to={path}>{path}</Link>
        </div>
      ))}
    </div>
  );
};
