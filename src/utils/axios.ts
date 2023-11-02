import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://tok-tok-api.onrender.com/',
});

// Interceptor pour ajouter le Bearer Token aux requêtes sortantes
axiosInstance.interceptors.request.use(
  (config) => {
    const persistedStateString = localStorage.getItem('persist:root');
    const persistedState = persistedStateString
      ? JSON.parse(persistedStateString)
      : null;

    if (persistedState && typeof persistedState.user === 'string') {
      const userState = JSON.parse(persistedState.user);
      const { token } = userState;

      if (token) {
        const modifiedConfig = { ...config };
        modifiedConfig.headers.Authorization = `Bearer ${token}`;
        return modifiedConfig;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
