import { createSlice } from '@reduxjs/toolkit';

import { getRightInitialState } from './utils';

import { Comment } from '../../models';

export interface ICommentsState {
  list: Comment[];
}

const initialState: ICommentsState = {
  list: [],
};

export const commentsSlice = createSlice({
  initialState: getRightInitialState(initialState, 'comments'),
  name: 'comments',
  reducers: {
    setComments: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setComments } = commentsSlice.actions;

export const commentsReducer = commentsSlice.reducer;
