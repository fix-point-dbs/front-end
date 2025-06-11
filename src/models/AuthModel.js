import api from "../lib/api";
import { getToken } from "../utils/LocalStorage";
export class AuthModel {
  async login(email, password) {
    const res = await api.post("/login", { email, password });
    return res.data;
  }

  async register(data) {
    const res = await api.post("/register", data);
    return res.data;
  }

  async logout() {
    const res = await api.post("/logout", {
      headers: {
        'Authorization': `Bearer ${getToken()}`,
      }
    });
    return res.data;
  }
}
