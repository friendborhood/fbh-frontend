/* eslint-disable no-param-reassign */
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  isLoggedIn: false,
  lastAction: null,

};

export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    loginSetter: (state, action) => {
      state.userName = action.payload.userName;
      state.token = action.payload.token;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
});

export const updateLoginState = (userData) => (dispatch) => {
  dispatch(userSlice.actions.loginSetter(userData));
};

export const store = configureStore({
  reducer: { data: userSlice.reducer },
});

export const userActions = userSlice.actions;
