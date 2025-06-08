import api from "../lib/api";
export class AuthModel {
  async login(email, password) {
    const res = await api.post("/login", { email, password });
    return res.data;
  }

  async register(data) {
    const res = await api.post("/register", data);
    return res.data;
  }
}
