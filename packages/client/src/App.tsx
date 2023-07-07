import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Router } from '@routers/Router';
import { ServicesModel, ServicesContext } from '@core/ServicesContext';
import { ControllersProvider } from '@core/ControllersContext';

import { AuthController } from '@controllers/AuthController';
import { ViewerController } from '@controllers/ViewerController';
import { LeaderboardController } from '@controllers/LeaderboardController';
import { AuthAPI } from '@api/AuthAPI';
import { ViewerAPI } from '@api/ViewerAPI';
import { LeaderboardAPI } from '@api/LeaderboardAPI';
import { PageLoader } from '@components/PageLoader';

import './styles/index.scss';
import { RootStore } from '@service/store';

import { setUser } from '@service/store/reducers/userSlice';
import { useAppDispatch } from '@service/store/hooks';

const services: ServicesModel = {
  auth: new AuthAPI(),
  viewer: new ViewerAPI(),
  lead: new LeaderboardAPI(),
};

export const createControllers = (store: RootStore) => ({
  auth: new AuthController(services, store),
  viewer: new ViewerController(services, store),
  lead: new LeaderboardController(services, store),
});

function App() {
  const [loadingViewer, setLoadingViewer] = useState(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    services.viewer
      .getViewer()
      .then(user => {
        dispatch(setUser(user));
      })
      .catch(() => {
        dispatch(setUser(null));
      })
      .finally(() => setLoadingViewer(false));
  }, [dispatch]);

  return (
    <ServicesContext.Provider value={services}>
      {!loadingViewer ? (
        <ControllersProvider createControllers={createControllers}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ControllersProvider>
      ) : (
        <PageLoader withBackground />
      )}
    </ServicesContext.Provider>
  );
}

export default App;
