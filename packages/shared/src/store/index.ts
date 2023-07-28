import { configureStore } from '@reduxjs/toolkit';

import { IUserState, userReducer } from './reducers/userSlice';

export * from './reducers';
export * from './hooks';

export const createReduxStore = () =>
  configureStore({
    reducer: { userReducer },
  });

export const store = createReduxStore();
export type RootState = {
  userReducer: IUserState;
};

export type RootStore = typeof store;

export type AppDispatch = typeof store.dispatch;
