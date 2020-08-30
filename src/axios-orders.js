import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-65aa6.firebaseio.com/'
});

export default instance;