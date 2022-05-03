/* eslint-disable no-param-reassign */
import { createSlice, configureStore } from '@reduxjs/toolkit';

/// auth slice:

const initialAuthState = {
  userName: '',
  isLoggedIn: false,
  lastAction: null,

};

export const userSlice = createSlice({
  name: 'userData',
  initialState: initialAuthState,
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

export const userActions = userSlice.actions;

/// display slice:

export const initialDisplayState = {
  showMobileMenu: true,
};

export const displaySlice = createSlice({
  name: 'display',
  initialState: initialDisplayState,
  reducers: {
    switchMobileMenuState: (state, action) => {
      state.showMobileMenu = action.payload.mobileMenuState;
    },

  },
});

export const updateMenuDisplay = (menuState) => (dispatch) => {
  dispatch(displaySlice.actions.switchMobileMenuState({ mobileMenuState: menuState }));
};

export const displayActions = displaySlice.actions;

/// CONFIGURE STORE:
export const store = configureStore({
  reducer: {
    auth: userSlice.reducer,
    display: displaySlice.reducer,
  },
});
