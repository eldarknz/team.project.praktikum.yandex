import { useMemo } from 'react';

import { ServicesContext } from '@core/ServicesContext';
import { ControllersProvider } from '@core/ControllersContext';
import { PageLoader } from '@components/PageLoader';

import { RootStore } from '@workspace/shared/src/store';

import { services, createControllers } from './dependencies';

import '@styles/index.scss';

function App({ store }: { store: RootStore }) {
  const getControllers = useMemo(() => createControllers.bind(null, store), [store]);

  return (
    <ServicesContext.Provider value={services}>
      <ControllersProvider createControllers={getControllers}>
        <PageLoader withBackground />
      </ControllersProvider>
    </ServicesContext.Provider>
  );
}

export default App;
