import api from "../lib/api";
export class UserModel {
  async getUsers() {
    const res = await api.get("/users");
    return res.data;
  }

  async deleteUser(id) {
    const res = await api.delete(`/users/${id}`);
    return res.data;
  }
}