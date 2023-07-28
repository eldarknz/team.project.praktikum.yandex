import { createAsyncThunk } from '@reduxjs/toolkit';

import { offUserLoader, setUser } from '@workspace/shared';

import { services } from '../../../App';

export const getUserAction = createAsyncThunk('user', async (_, { dispatch }) => {
  const offLoader = () => dispatch(offUserLoader());
  try {
    const user = await services.viewer.getViewer();
    dispatch(setUser(user));
    offLoader();
  } catch (e) {
    offLoader();
    console.error(e);
  }
});
