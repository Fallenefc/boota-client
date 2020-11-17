import axios from 'axios';
const acesstoken = localStorage.getItem('token');

const cors = "https://cors-anywhere.herokuapp.com/";

const api = axios.create({
  baseURL: `${cors}https://boota-app.herokuapp.com`,
  headers: {
    Authorization: acesstoken ? acesstoken : '',
  },
});

export default api;
