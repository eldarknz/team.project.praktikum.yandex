import { createSlice } from '@reduxjs/toolkit';

import { Viewer } from '../../models/viewer';

import { getRightInitialState } from './utils';

export interface IUserState {
  user: Viewer | null;
  load: boolean;
}

const initialState: IUserState = {
  user: null,
  load: true,
};

export const userSlice = createSlice({
  initialState: getRightInitialState(initialState, 'user'),
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
