import axios from 'axios';
import { getTokenFromLocalStorage } from '../user-manager';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://api-friendborhood.herokuapp.com/';
const END_POINTS = {
  USER: 'user',
  ITEM: 'item',
  CATEGORIES: 'item/categories',
  OFFERS: 'offers',
  ME: 'user/me',
};
const network = axios.create({ baseURL: BACKEND_URL });
network.interceptors.request.use((request) => {
  const tokenFromStorage = getTokenFromLocalStorage();
  if (tokenFromStorage) {
    request.headers.common.Authorization = `Bearer ${tokenFromStorage}`;
  }
  return request;
});
export { network, END_POINTS };
