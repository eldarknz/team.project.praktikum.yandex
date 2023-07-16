import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import 'normalize.css';

import '@styles/index.scss';
import { Provider } from 'react-redux';
import { store } from '@shared/store';

import App from './App';

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
