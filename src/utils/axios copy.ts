import axios from 'axios';

const axiosInstance2 = axios.create({
  baseURL: 'http://localhost:3000/',
});

const token = localStorage.getItem('token');

axiosInstance2.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization) {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log(token);
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance2;
