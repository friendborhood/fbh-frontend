import axios from 'axios';

const BACKEND_URL = 'http://localhost:3000/';
const network = axios.create({ baseURL: BACKEND_URL });
export { network };
