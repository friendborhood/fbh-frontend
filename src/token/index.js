const TOKEN_KEY = 'token';
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = (newToken) => localStorage.setItem(TOKEN_KEY, newToken);
