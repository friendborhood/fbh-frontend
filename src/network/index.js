import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://api-friendborhood.herokuapp.com/';
const END_POINTS = {
  USER: 'user',
};
const network = axios.create({ baseURL: BACKEND_URL });
export { network, END_POINTS };
