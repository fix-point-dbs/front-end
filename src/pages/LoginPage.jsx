import { useState } from 'react';
import { AuthPresenter } from '../presenters/AuthPresenter';
import { LoginForm } from '../views/LoginForm';

export function LoginPage() {
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);

  const presenter = new AuthPresenter({
    onLoginSuccess: (userData) => {
      setUser(userData);
      setMessage('Login berhasil!');
    },
    onLoginFailed: (errorMsg) => {
      setUser(null);
      setMessage(errorMsg);
    }
  });

  const handleLogin = async (email, password) => {
    await presenter.handleLogin(email, password);
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Selamat datang, {user.email}!</h2>
        </div>
      ) : (
        <LoginForm onSubmit={handleLogin} />
      )}
      {message && <p>{message}</p>}
    </div>
  );
}
