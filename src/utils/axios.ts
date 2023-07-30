import axios from 'axios';


export const useToken = () => {

  const persistedState = JSON.parse(localStorage.getItem('persist:root'));

  if (persistedState) {
    const userState = JSON.parse(persistedState.user);
    const token = userState.token;
    return token
  }
}

const leToken = useToken();

console.log(leToken)
export default axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Authorization':`Bearer ${leToken}`
}
});
