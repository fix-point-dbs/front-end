import api from "../lib/api";
import { getToken } from '../utils/LocalStorage';
export class UserModel {
  async getUsers() {
    const res = await api.get("/users",{
        headers: {
            'Authorization': `Bearer ${getToken()}`,
        }
    });
    return res.data;
  }

  async deleteUser(id) {
    const res = await api.delete(`/users/${id}`,{
        headers: {
            'Authorization': `Bearer ${getToken()}`,
        }
    });
    return res.data;
  }
}