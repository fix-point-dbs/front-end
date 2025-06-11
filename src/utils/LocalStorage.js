export function getToken() {
  return localStorage.getItem("token");
}

export function saveToken(token) {
  localStorage.setItem("token", token);
}

export function saveRole(role) {
  localStorage.setItem("role", role);
}

export function getRole() {
  return localStorage.getItem("role");
}

export function saveUser(user) {
  sessionStorage.setItem("user", JSON.stringify(user));
}

export function getUser() {
  return JSON.parse(sessionStorage.getItem("user"));
}

export function removeUser() {
  sessionStorage.removeItem("user");
}

export function isLoggedIn() {
  return !!getToken();
}

export function saveUserId(userId) {
  sessionStorage.setItem("userId", userId);
}

export function getUserId() {
  return sessionStorage.getItem("userId");
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  sessionStorage.removeItem("user");
}
