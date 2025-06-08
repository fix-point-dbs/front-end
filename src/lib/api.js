import axios from 'axios';
import { getToken, logout } from '../utils/LocalStorage';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Ganti sesuai API-mu
  headers: {
    'Content-Type': 'application/json',
  },
});

// 🔐 Tambahkan token ke setiap request jika ada
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 🚨 Tangani error global (contoh: 401, 500)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token invalid atau expired
      logout();
      window.location.href = '/login'; // Redirect ke halaman login
    }
    return Promise.reject(error);
  }
);

export default api;
