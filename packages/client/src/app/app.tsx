import { useEffect, useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useStore } from 'react-redux';

import { RootState } from '@workspace/shared/src/store';

import { Router } from '@routers/Router';
import { ServicesContext } from '@core/ServicesContext';
import { ControllersProvider } from '@core/ControllersContext';
import { PageLoader } from '@components/PageLoader';
import { useViewerFromSession } from '@hooks/useViewerFromSession';

import { services, createControllers } from './dependencies';

import '@styles/index.scss';

const ContentSPA = () => {
  const { isLoading, getViewer } = useViewerFromSession(true);

  useEffect(() => {
    getViewer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? <PageLoader withBackground /> : <Router />;
};

function App() {
  console.log('Client App');

  const store = useStore<RootState>();
  const getControllers = useMemo(() => createControllers.bind(null, store), [store]);

  console.log('Client App store', store);

  return (
    <BrowserRouter>
      <ServicesContext.Provider value={services}>
        <ControllersProvider createControllers={getControllers}>
          <ContentSPA />
        </ControllersProvider>
      </ServicesContext.Provider>
    </BrowserRouter>
  );
}

export default App;
