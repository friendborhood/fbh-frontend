import axios from 'axios';
import { getTokenFromLocalStorage, getUserNameFromLocalStorage } from '../user-manager';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://api-friendborhood.herokuapp.com/';
const END_POINTS = {
  USER: 'user',
  ITEM: 'item',
  CATEGORIES: 'categories',
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

const fetchUserData = async (setUserName, setImageUrl) => {
  const userNameFromStorage = getUserNameFromLocalStorage();
  setUserName(userNameFromStorage);
  const { data: userData } = await network.get(END_POINTS.ME);
  console.log(JSON.stringify(userData));
  console.log(userData.imageUrl);
  setImageUrl(userData.imageUrl);
};
const fetchCategories = async () => {
  const { data: currentCategories } = await network.get(END_POINTS.CATEGORIES);
  // console.log('fetched categories from backend', currentCategories);
  return currentCategories;
};

export {
  network, END_POINTS, fetchUserData, fetchCategories,
};
