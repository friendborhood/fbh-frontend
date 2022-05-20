/* eslint-disable no-param-reassign */
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { getUserNameFromLocalStorage, deleteTokenFromLocalStorage, setTokenToLocalStorage } from '../user-manager';
/// auth slice:

const initialAuthState = {
  userName: null,
  token: null,
};

export const userSlice = createSlice({
  name: 'userData',
  initialState: initialAuthState,
  reducers: {
    loginSetter: (state, action) => {
      state.userName = action.payload.userName;
      state.token = action.payload.token;
    },
  },
});

export const updateLoginState = (token) => (dispatch) => {
  setTokenToLocalStorage(token);
  const userName = getUserNameFromLocalStorage(token);
  dispatch(userSlice.actions.loginSetter({ userName, token }));
};

export const updateLogoutState = () => (dispatch) => {
  deleteTokenFromLocalStorage();
  dispatch(userSlice.actions.loginSetter({ userName: null, token: null }));
};

export const userActions = userSlice.actions;

/// display slice:

export const initialDisplayState = {
  showMobileMenu: false,
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
