export class AuthModel {
    async login(email, password) {
      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });
  
        const data = await response.json();
  
        if (response.ok && data.success) {
          return { success: true, user: data.user };
        } else {
          return { success: false, message: data.message || 'Login gagal' };
        }
      } catch (error) {
        return { success: false, message: 'Gagal menghubungkan ke server' + error };
      }
    }
  }
  