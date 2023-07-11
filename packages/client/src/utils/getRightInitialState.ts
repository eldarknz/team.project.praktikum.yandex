import isServer from '@utils/isServerCheck';
import { RootState } from '@service/store';

export const getRightInitialState = <T>(initialState: T, reducer: keyof RootState) =>
  isServer
    ? initialState
    : window.__REDUX_STORE__
    ? window.__REDUX_STORE__?.[reducer]
    : initialState;
