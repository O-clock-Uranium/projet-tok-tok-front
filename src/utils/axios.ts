// import axios from 'axios';

// export const useToken = () => {
//   const persistedState = JSON.parse(localStorage.getItem('persist:root'));

//   if (persistedState) {
//     const userState = JSON.parse(persistedState.user);
//     const { token } = userState;
//     console.log(token);
//     return token;
//   }
//   return null;
// };

// const leToken = useToken();

// axios.interceptors.request.use(async (config) => {
//   const userDataStr = localStorage.getItem('user');
//   const userData = userDataStr ? JSON.parse(userDataStr) : null;
//   if (userData) {
//     const updatedConfig = { ...config }; // Crée une copie de l'objet de configuration
//     console.log(userData.token);
//     updatedConfig.headers.Authorization = `Bearer ${userData.token}`;
//   }
//   return config;
// });

// export default axios.create({
//   baseURL: 'http://localhost:3000/',
//   headers: {
//     // eslint-disable-next-line prettier/prettier
//     'Authorization': `Bearer ${leToken}`,
//     //! Bien laisser les '' autour de Authorization !!!!\\
//   },
// });

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/', // Remplacez par votre URL de l'API
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
