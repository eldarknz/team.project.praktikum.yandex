import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Router } from '@routers/Router';
import {
  ServicesModel,
  ServicesContext,
} from '@core/ServicesContext';
import { ControllersProvider } from '@core/ControllersContext';
import {
  StoreContextProvider,
  Viewer,
} from '@core/StoreContext';
import { AuthController } from '@controllers/AuthController';
import { ViewerController } from '@controllers/ViewerController';
import { AuthAPI } from '@api/AuthAPI';
import { ViewerAPI } from '@api/ViewerAPI';

import './styles/index.scss';
import { StoreModel } from './core/StoreContext';

//TODO - add loading spinner while getting viewer

const services: ServicesModel = {
  auth: new AuthAPI(),
  viewer: new ViewerAPI(),
};

const createControllers = (
  store: StoreModel
) => ({
  auth: new AuthController(services, store),
  viewer: new ViewerController(services, store),
});

function App() {
  const [loadingViewer, setLoadingViewer] =
    useState(true);
  const [viewer, setViewer] =
    useState<Viewer | null>(null);

  useEffect(() => {
    services.viewer
      .getViewer()
      .then(setViewer)
      .catch(() => setViewer(null))
      .finally(() => setLoadingViewer(false));
  }, []);

  return (
    <ServicesContext.Provider value={services}>
      {!loadingViewer ? (
        <StoreContextProvider viewer={viewer}>
          <ControllersProvider
            createControllers={createControllers}>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </ControllersProvider>
        </StoreContextProvider>
      ) : null}
    </ServicesContext.Provider>
  );
}

export default App;
