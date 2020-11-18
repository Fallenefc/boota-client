import axios from 'axios';

const cors = "https://cors-anywhere.herokuapp.com/";

const api = () => {
  const acesstoken = localStorage.getItem('token');

  return axios.create({
    baseURL: `${cors}https://boota-app.herokuapp.com`,
    headers: {
      Authorization: acesstoken ? acesstoken : '',
    },
  });
}

export default api;
