import { RootState } from '../shared/store';

declare global {
  interface Window {
    __REDUX_STORE__?: RootState;
  }
}
