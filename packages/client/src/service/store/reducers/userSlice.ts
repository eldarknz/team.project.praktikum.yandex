import { Viewer } from '@core/StoreContext';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { createSlice } from '@reduxjs/toolkit';

export interface IUserState {
  user: Viewer | null;
}

const initialState: IUserState = {
  user: null,
};

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
