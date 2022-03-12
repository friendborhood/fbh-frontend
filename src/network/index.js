import axios from 'axios';

const BACKEND_URL = 'https://api-friendborhood.herokuapp.com/';
const network = axios.create({ baseURL: BACKEND_URL });
export { network };
