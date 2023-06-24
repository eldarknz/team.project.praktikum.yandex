// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userSlice';

export const store = configureStore({
  reducer: { userReducer },
});

export type RootState = ReturnType<
  typeof store.getState
>;

export type RootStore = typeof store;

export type AppDispatch = typeof store.dispatch;
