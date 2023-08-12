import { configureStore } from '@reduxjs/toolkit';

import { IUserState, userReducer } from './reducers/userSlice';
import { ICommentsState, commentsReducer } from './reducers/comments';

export const createReduxStore = () =>
  configureStore({
    reducer: {
      user: userReducer,
      comments: commentsReducer,
    },
  });

export type RootState = {
  user: IUserState;
  comments: ICommentsState;
};

export type RootStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = RootStore['dispatch'];
