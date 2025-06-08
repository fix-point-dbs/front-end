import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "./views/home/components/ScrollToTop";
import { LoginPage } from "./pages/authentication/LoginPage";
import { LandingPage } from "./pages/home/LandingPage";
import { ServicePage } from "./pages/home/ServicePage";
// import { BengkelPage } from "./pages/home/BengkelPage";
// import { TowingPage } from "./pages/home/TowingPage";
import { DetailServicePage } from "./pages/home/DetailServicePage";
import { BookingPage } from "./pages/home/BookingPage";
import { DashboardPage } from "./pages/admin/DashboardPage";
import { PengajuanMitraPage } from "./pages/admin/PengajuanMitraPage";
import TambahMitra from "./pages/admin/TambahMitra";
import { ConfirmationBookingPage } from "./pages/home/ConfirmationBookingPage";
import { ArtikelPage } from "./pages/home/ArtikelPage";
import { MitraPage } from "./pages/mitra/MitraPage";
import { DetailKontakPage } from "./pages/home/DetailKontakPage";
import { InformasiUmumPage } from "./pages/home/InformasiUmumPage";
import { DetailLayananPage } from "./pages/home/DetailLayananPage";
import { FotoLayananPage } from "./pages/home/FotoLayananPage";
import { RegisterPage } from "./pages/authentication/RegisterPage";

import { ReviewRegistrasiPage } from "./pages/mitra/ReviewRegistrasiPage";
import { BookingUserPage } from "./pages/user/BookingUserPage";
import { DashboardMitraPage } from "./pages/mitra/DashboardMitraPage";
import { SettingPage } from "./pages/mitra/SettingPage";
import { HistoryOrderPage } from "./pages/mitra/HistoryOrderPage";
import { OrderPage } from "./pages/mitra/OrderPage";
import { RegistrationMitraPage } from "./pages/mitra/RegistrationMitraPage";
import { SettingUserPage } from "./pages/user/SettingUserPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MitraAdminPage } from "./pages/admin/MitraAdminPage";
import { BookingAdminPage } from "./pages/admin/BookingAdminPage";
import { UserAdminPage } from "./pages/admin/UserAdminPage";
function App() {

  return (
    <>
    {/* <ScrollToTop /> */}
    <ToastContainer />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<ServicePage />} />
        {/* <Route path="/bengkel" element={<BengkelPage />} />
        <Route path="/towing" element={<TowingPage />} /> */}
        <Route path="/service/detail/:id" element={<DetailServicePage />} />
        <Route path="/admin/dashboard" element={<DashboardPage />} />
        <Route path="/admin/pengajuan-mitra" element={<PengajuanMitraPage />} />
        <Route path="/admin/mitra" element={<MitraAdminPage />} />
        <Route path="/admin/booking" element={<BookingAdminPage />} />
        <Route path="/admin/pengajuan-mitra/tambah" element={<TambahMitra />} />
        <Route path="/admin/users" element={<UserAdminPage />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/artikel" element={<ArtikelPage />} />
        <Route path="/mitra" element={<MitraPage />} />
        <Route path="/registrasi/data-diri" element={<DetailKontakPage />} />
        <Route
          path="/registrasi/informasi-layanan"
          element={<InformasiUmumPage />}
        />
        <Route
          path="/registrasi/detail-layanan"
          element={<DetailLayananPage />}
        />
        <Route path="/registrasi/foto-layanan" element={<FotoLayananPage />} />
        <Route
          path="/registrasi/review/:id"
          element={<ReviewRegistrasiPage />}
        />
        <Route path="/registration/mitra" element={<RegistrationMitraPage />} />
        <Route
          path="/booking/confirmation/:id"
          element={<ConfirmationBookingPage />}
        />
        <Route path="/dashboard-user/booking" element={<BookingUserPage />} />
        <Route path="/dashboard-user/settings" element={<SettingUserPage />} />
        <Route path="/dashboard-mitra/statistic" element={<DashboardMitraPage />} />
        <Route path="/dashboard-mitra/order" element={<OrderPage />} />
        <Route path="/dashboard-mitra/history-order" element={<HistoryOrderPage />} />
        <Route path="/dashboard-mitra/settings" element={<SettingPage />} />
      </Routes>
    </>
  );
}

export default App;
