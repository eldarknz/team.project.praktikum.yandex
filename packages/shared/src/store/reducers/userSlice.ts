import { createSlice } from '@reduxjs/toolkit';

import { Viewer } from '../../models/viewer';

import { RootState } from '..';

const isServer = !(typeof window !== 'undefined' && window.document);

const getRightInitialState = <T>(initialState: T, reducer: keyof RootState) =>
  isServer
    ? initialState
    : window.__REDUX_STORE__
    ? window.__REDUX_STORE__?.[reducer]
    : initialState;

export interface IUserState {
  user: Viewer | null;
  load: boolean;
}

const initialState: IUserState = {
  user: null,
  load: true,
};

export const userSlice = createSlice({
  initialState: getRightInitialState<IUserState>(initialState, 'userReducer'),
  name: 'user',
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.load = false;
    },
    offUserLoader: state => {
      state.load = false;
    },
  },
});

export const { setUser, offUserLoader } = userSlice.actions;

export const userReducer = userSlice.reducer;
