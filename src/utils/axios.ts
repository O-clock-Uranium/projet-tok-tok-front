import axios from 'axios';

export const useToken = () => {
  const persistedState = JSON.parse(localStorage.getItem('persist:root'));

  if (persistedState) {
    const userState = JSON.parse(persistedState.user);
    const { token } = userState;
    return token;
  }
  return null;
};

const leToken = useToken();

export default axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    Authorization: `Bearer ${leToken}`,
    //! Bien laisser les '' autour de Authorization !!!!
  },
});
