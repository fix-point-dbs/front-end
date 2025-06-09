import { useNavigate } from "react-router-dom";
import Navbar from "../../views/home/navbar/Navbar";
import Footer from "../../views/home/footer/Footer";
import bgLogin from "../../assets/images/bg-login.png";
import RegisterForm from "../../views/RegisterForm";
import { RegisterPresenter } from "../../presenters/authentication/RegisterPresenter";
import { showSuccessToast } from "../../utils/Toast";
import MotionDiv from "../../utils/TransitionSmoth";
export function RegisterPage() {
  const navigate = useNavigate();
  const onRegisterSuccess = () => {
    showSuccessToast("Registrasi berhasil!");
    navigate("/login");
  }
  const presenter = new RegisterPresenter({ onRegisterSuccess });

  const handleLogin = async (data) => {
    data.role = "user";
    console.log(data);
    await presenter.handleRegister(data);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Navbar />
      <main className="flex-grow flex items-center justify-center pt-[100px] p-6">
      <div className="flex flex-col p-10 shadow-lg rounded bg-slate-100 md:flex-row items-center justify-between w-full max-w-4xl gap-8">
          <MotionDiv>
          <RegisterForm  onSubmit={handleLogin} />
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