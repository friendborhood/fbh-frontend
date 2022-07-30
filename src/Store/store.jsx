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
  showMobileSortDropdown: false,
};

export const displaySlice = createSlice({
  name: 'display',
  initialState: initialDisplayState,
  reducers: {
    switchMobileMenuState: (state, action) => {
      state.showMobileMenu = action.payload.mobileMenuState;
    },
    switchMobileSortState: (state, action) => {
      state.showMobileSortDropdown = action.payload.mobileSortState;
      console.log('sort menu set to ', state.showMobileSortDropdown);
    },

  },
});

export const updateMenuDisplay = (menuState) => (dispatch) => {
  dispatch(displaySlice.actions.switchMobileMenuState({ mobileMenuState: menuState }));
};
export const updateSortDisplay = (menuState) => (dispatch) => {
  dispatch(displaySlice.actions.switchMobileSortState({ mobileSortState: menuState }));
};

export const displayActions = displaySlice.actions;

/// categories slice:

export const initialCategoriesState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialCategoriesState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload.categories;
    },
  },
});

export const setCategories = (categories) => (dispatch) => {
  dispatch(categoriesSlice.actions.setCategories({ categories }));
};

export const categorySlice = categoriesSlice.actions;

/// CONFIGURE STORE:
export const store = configureStore({
  reducer: {
    auth: userSlice.reducer,
    display: displaySlice.reducer,
    categories: categorySlice.reducer,
  },
});
