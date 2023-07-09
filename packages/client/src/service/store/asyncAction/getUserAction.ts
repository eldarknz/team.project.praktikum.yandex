import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  offUserLoader,
  setUser,
} from '@service/store/reducers/userSlice';
import { services } from '../../../App';

export const getUserAction = createAsyncThunk(
  'user',
  async (_, { dispatch }) => {
    const offLoader = () =>
      dispatch(offUserLoader());
    await services.viewer
      .getViewer()
      .then(user => {
        dispatch(setUser(user));
      })
      .catch(offLoader)
      .finally(offLoader);
  },
);
