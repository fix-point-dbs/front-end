import { useState } from "react";
import { AuthPresenter } from "../../presenters/AuthPresenter";
import { LoginForm } from "../../views/LoginForm";
import Navbar from "../../views/home/navbar/Navbar";
import Footer from "../../views/home/footer/Footer";
import mekanikImg from "../../assets/images/mekanik.png";
import RegisterForm from "../../views/RegisterForm";

export function RegisterPage() {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  const presenter = new AuthPresenter({
    onLoginSuccess: (userData) => {
      setUser(userData);
      setMessage("Login berhasil!");
    },
    onLoginFailed: (errorMsg) => {
      setUser(null);
      setMessage(errorMsg);
    },
  });

  const handleLogin = async (email, password) => {
    await presenter.handleLogin(email, password);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Navbar />
      <main className="flex-grow flex items-center justify-center pt-[100px] p-6">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8">
          <RegisterForm />
          <div className="w-full p-4 md:w-1/2">
            <img
              src={mekanikImg}
              alt="gambar mekanik"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </main>
      <Footer className="m-0" />
    </div>
  );
}