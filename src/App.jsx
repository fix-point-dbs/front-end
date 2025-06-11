import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "./views/home/components/ScrollToTop";
import { LoginPage } from "./pages/authentication/LoginPage";
import HomeRoute from "./routes/HomeRoute";
import UserRoute from "./routes/UserRoute";
import AdminRoute from "./routes/AdminRoute";
import MitraRoute from "./routes/MitraRoute";
import { RegisterPage } from "./pages/authentication/RegisterPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UnauthorizedPage from "./pages/authentication/UnauthorizedPage";
import NotFoundPage from "./pages/authentication/NotFoundPage";
import LoginMitraPage from "./pages/authentication/LoginMitraPage";
import RegisterMitraPage from "./pages/authentication/RegisterMitraPage";
function App() {

  return (
    <>
    {/* <ScrollToTop /> */}
    <ToastContainer />
      <Routes>
      {HomeRoute()}
      {UserRoute()}
      {AdminRoute()}
      {MitraRoute()}
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/mitra" element={<LoginMitraPage />} />
        <Route path="/register/mitra" element={<RegisterMitraPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
