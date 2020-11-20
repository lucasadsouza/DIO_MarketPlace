import axios from 'axios';

const api = axios.create({
  baseURL: 'http://e5d8e2e70c30.ngrok.io',
});

export default api;
