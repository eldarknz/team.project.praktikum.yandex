import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  initialState: {
    user: {
      loggedIn: false,
    },
  },
  name: 'user',
  reducers: {
    userLogin: state => {
      state.user.loggedIn = true;
      console.log('Ура, вы авторизованы!');
    },
  },
});

export const { userLogin } = userSlice.actions;

export const userReducer = userSlice.reducer;
