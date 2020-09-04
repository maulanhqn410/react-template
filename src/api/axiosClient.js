import axios from 'axios';
import queryString from 'query-string';
import { localGetItem } from '../common/helpers/storage';
import { LOCAL_STORAGE } from '../common/constants';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSeriallizer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  const token = localGetItem(LOCAL_STORAGE.ACCESS_TOKEN);
  let Authorization = '';
  if (token) Authorization = `Bearer ${token}`;
  const newConfig = {
    ...config,
    headers: {
      ...config.headers,
      Authorization,
    }
  }
  return newConfig;
})

axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }
  return response;
}, (error) => {
  throw error;
});

export default axiosClient;
