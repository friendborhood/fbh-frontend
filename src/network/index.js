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

const fetchUserData = async ({
  setUserName,
  setImageUrl,
  setUserLocation,
  setUserData,
  setAddress,
  setPhoneNumber,
}) => {
  const userNameFromStorage = getUserNameFromLocalStorage();
  if (setUserName) {
    setUserName(userNameFromStorage);
  }
  const { data: userData } = await network.get(END_POINTS.ME);

  if (setUserData) {
    setUserData(userData);
  }
  if (setPhoneNumber) {
    setPhoneNumber(userData.phoneNumber);
  }
  if (setAddress) {
    setAddress(userData.location.address);
  }
  if (setImageUrl) {
    setImageUrl(userData.imageUrl);
  }
  if (setUserLocation) {
    setUserLocation(userData.location);
  }
};
const fetchCategories = async () => {
  const { data: currentCategories } = await network.get(END_POINTS.CATEGORIES);
  return currentCategories;
};

export {
  network, END_POINTS, fetchUserData, fetchCategories,
};
