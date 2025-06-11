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

  async updateUser(id, data){
    const res = await api.put(`/users/${id}`,data,{
        headers: {
            'Authorization': `Bearer ${getToken()}`,
        }
    });
    return res.data;
  }

  async changePassword(id, data){
    const res = await api.put(`/users/${id}/change-password`,data,{
        headers: {
            'Authorization': `Bearer ${getToken()}`,
        }
    });
    return res.data;
  }
}