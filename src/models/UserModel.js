export class UserModel {
    baseUrl = 'http://localhost:3000/users'; 
  
    async getUsers() {
      const res = await fetch(this.baseUrl);
      return await res.json();
    }
  
    async createUser(user) {
      const res = await fetch(this.baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      return await res.json();
    }
  
    async updateUser(id, user) {
      const res = await fetch(`${this.baseUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      return await res.json();
    }
  
    async deleteUser(id) {
      const res = await fetch(`${this.baseUrl}/${id}`, {
        method: 'DELETE',
      });
      return await res.json();
    }
  }
  