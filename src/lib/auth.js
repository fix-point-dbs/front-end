import { useNavigate } from 'react-router-dom';

export function getToken() {
    return sessionStorage.getItem('token');
  }
  
  export function saveToken(token) {
    sessionStorage.setItem('token', token);
  }

  export function saveUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  
  export function getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  export function isLoggedIn() {
    return !!getToken();
  }

  export function saveUserId(userId) {
    sessionStorage.setItem('userId', userId);
  }
  
  export function getUserId() {
    return sessionStorage.getItem('userId');
  }
  
  export function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('userId');
  }
  