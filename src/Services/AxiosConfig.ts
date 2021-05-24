import axios from 'axios';
import { SERVER_URL } from '../Environment';

const api = () => {
  const accesstoken = localStorage.getItem('token');

  console.log(SERVER_URL);

  return axios.create({
    baseURL: SERVER_URL,
    headers: {
      Authorization: accesstoken ? accesstoken : '',
    },
  });
}

export default api;
