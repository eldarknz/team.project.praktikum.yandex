import { RootState } from '@service/store';

declare global {
  interface Window {
    __REDUX_STORE__?: RootState;
  }
}
