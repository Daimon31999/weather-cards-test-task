import axios from 'axios';

export const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
export const API_KEY = '0ecc34d6d329fb1c62bcf0bf7778ebb1';

const apiClient = axios.create({
  baseURL,
});

apiClient.interceptors.request.use((request) => {
  request.params = {
    ...request.params,
    appid: API_KEY,
    units: 'metric',
  };

  return request;
});

export default apiClient;
