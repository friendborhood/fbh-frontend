import jwtDecode from 'jwt-decode';

const TOKEN_KEY = 'token';
export const getTokenFromLocalStorage = () => localStorage.getItem(TOKEN_KEY);
export const setTokenToLocalStorage = (newToken) => localStorage.setItem(TOKEN_KEY, newToken);
export const deleteTokenFromLocalStorage = () => { localStorage.removeItem(TOKEN_KEY); };
export const getUserNameFromLocalStorage = () => {
  try {
    const token = getTokenFromLocalStorage();
    const { userName } = jwtDecode(token);
    return userName;
  } catch (e) {
    console.error(e);
  }
  return false;
};
