export * from './config';
export * from './core';
export * from './models';
export * from './store';

import { RootState } from './store';

declare global {
  interface Window {
    __REDUX_STORE__?: RootState;
    __IS_SSR__?: boolean;
  }
}
