// utils/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  withCredentials: true, // needed if you're using Sanctum
});

export const fetchCsrfToken = async () => {
  await axios.get('http://localhost:8000/sanctum/csrf-cookie');
};

export default api;
