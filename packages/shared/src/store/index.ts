import { configureStore } from '@reduxjs/toolkit';

import { IUserState, userReducer } from './reducers/userSlice';

export const createReduxStore = () =>
  configureStore({
    reducer: { userReducer },
  });

export type RootState = {
  userReducer: IUserState;
};

export type RootStore = ReturnType<typeof createReduxStore>;

export type AppDispatch = RootStore['dispatch'];
