import { RootState } from './store';

declare global {
  interface Window {
    __REDUX_STORE__?: RootState;
  }
}
