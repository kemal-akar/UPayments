import axios from 'axios';
import {BASE_URL} from './endpoints';

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});
