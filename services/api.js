import axios from 'axios';

const api = axios.create({
  baseURL: "https://fbb-api.hyst.dev/"
});

export default api;