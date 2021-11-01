import axios from 'axios';

// FIXME: Temporary decision
export const baseURL = 'https://tnac.webstaging.be';

// FIXME: Temporary decision
export const companyId = 10;

// TODO: implement with interceptors
const apiClient = axios.create({
  baseURL,
});

apiClient.interceptors.request.use((request) => {
  request.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  request.data = {
    ...request.data,
    companyId,
  };
  return request;
});

export default apiClient;
