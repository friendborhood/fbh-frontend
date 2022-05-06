/* eslint-disable no-param-reassign */
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://api-friendborhood.herokuapp.com/';
const END_POINTS = {
  USER: 'user',
  ITEM: 'item',
  CATEGORIES: 'item/categories',
};
const network = axios.create({ baseURL: BACKEND_URL });
network.interceptors.request.use((request) => {
  request.headers.common.Authorization = 'Bearer hi';

  return request;
});
export { network, END_POINTS };
