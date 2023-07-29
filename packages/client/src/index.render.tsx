import { lazy } from 'react';
import { Provider } from 'react-redux';
import { hydrateRoot, createRoot } from 'react-dom/client';

import { createReduxStore } from '@workspace/shared/src/store';

import { IS_RUNNING_SSR_IN_BROWSER } from './app/index';

import 'normalize.css';
import '@styles/index.scss';

const element = document.getElementById('root') as HTMLElement;
const AppSPA = lazy(() => import('./app/app'));

const render = async () => {
  console.log('IS_RUNNING_SSR_IN_BROWSER', IS_RUNNING_SSR_IN_BROWSER);

  if (IS_RUNNING_SSR_IN_BROWSER) {
    hydrateRoot(
      element,
      <Provider store={createReduxStore()}>
        <AppSPA />
      </Provider>
    );
  } else {
    createRoot(element).render(
      <Provider store={createReduxStore()}>
        <AppSPA />
      </Provider>
    );
  }
};

render();
