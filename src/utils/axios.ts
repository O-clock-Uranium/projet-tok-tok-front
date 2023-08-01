import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
});

// Interceptor pour ajouter le Bearer Token aux requêtes sortantes
axiosInstance.interceptors.request.use(
  (config) => {
    const persistedState = JSON.parse(localStorage.getItem('persist:root'));
    // console.log('machin', persistedState);
    const userState = JSON.parse(persistedState.user);
    // console.log('truc', userState);
    const { token } = userState;
    // console.log(token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
