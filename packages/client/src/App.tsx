import { useEffect } from 'react';
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
import { RootStore } from '@shared/store';
import { useAppDispatch, useAppSelector } from '@shared/store/hooks';
import { getUserAction } from '@service/store';
import './styles/index.scss';

export const services: ServicesModel = {
  auth: new AuthAPI(),
  viewer: new ViewerAPI(),
  lead: new LeaderboardAPI(),
};

export const createControllers = (store: RootStore) => ({
  auth: new AuthController(services, store),
  viewer: new ViewerController(services, store),
  lead: new LeaderboardController(services, store),
});

const Content = () => {
  const { load, user } = useAppSelector(state => state.userReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (user === null && load) {
      dispatch(getUserAction());
    }
  }, [dispatch, load, user]);

  return !load ? (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  ) : (
    <PageLoader withBackground />
  );
};

function App() {
  return (
    <ServicesContext.Provider value={services}>
      <ControllersProvider createControllers={createControllers}>
        <Content />
      </ControllersProvider>
    </ServicesContext.Provider>
  );
}

export default App;
