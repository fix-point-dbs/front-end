import { LoginPresenter } from "../../presenters/authentication/LoginPresenter";
import { LoginForm } from "../../views/LoginForm";
import Navbar from "../../views/home/navbar/Navbar";
import Footer from "../../views/home/footer/Footer";
import bgLogin from "../../assets/images/bg-login.png";
import { showSuccessToast } from "../../utils/Toast";
import { useNavigate } from "react-router-dom";
import MotionDiv from "../../utils/TransitionSmoth";
export function LoginPage() {
  const navigate = useNavigate();
  const onLoginSuccess = () => {
    showSuccessToast("Login berhasil!");
    navigate("/");
  };

  const presenter = new LoginPresenter({ onLoginSuccess });
  const handleLogin = async (email, password) => {
    await presenter.handleLogin(email, password);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[url('/src/assets/images/bg-register.png')] bg-no-repeat bg-center bg-cover text-[#1e1e1e]">
      <main className="flex-grow flex items-center justify-center p-6">
      <div className="flex flex-col p-10 shadow-lg rounded-xl bg-white/70 backdrop-blur-md md:flex-row items-center justify-between w-full max-w-4xl gap-8">
          <MotionDiv>
            <LoginForm onSubmit={handleLogin} />
          </MotionDiv>

          <div className="w-full p-4 md:w-[750px]">
            <img
              src={bgLogin}
              alt="gambar mekanik"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </main>
      {/* <Footer className="m-0" /> */}
    </div>
  );
}
