import { BrowserRouter } from 'react-router-dom';
import { Router } from '@routers/Router';
import {
  ServicesModel,
  ServicesContext,
} from '@core/ServicesContext';
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
import {
  useAppDispatch,
  useAppSelector,
} from '@service/store/hooks';
import { useEffect } from 'react';
import { getUserAction } from '@service/store/asyncAction';

export const services: ServicesModel = {
  auth: new AuthAPI(),
  viewer: new ViewerAPI(),
  lead: new LeaderboardAPI(),
};

export const createControllers = (
  store: RootStore,
) => ({
  auth: new AuthController(services, store),
  viewer: new ViewerController(services, store),
  lead: new LeaderboardController(
    services,
    store,
  ),
});

function App() {
  const { load, user } = useAppSelector(
    state => state.userReducer,
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    user === null &&
      load &&
      dispatch(getUserAction());
  }, [dispatch, load, user]);

  return (
    <ServicesContext.Provider value={services}>
      {!load ? (
        <ControllersProvider
          createControllers={createControllers}>
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
