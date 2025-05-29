import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
// import ScrollToTop from "./views/home/components/ScrollToTop";

import { LoginPage } from "./pages/home/LoginPage";
import { UserPage } from "./pages/home/UserPage";
import { LandingPage } from "./pages/home/LandingPage";
import { BengkelPage } from "./pages/home/BengkelPage";
import { TowingPage } from "./pages/home/TowingPage";
import { DetailServicePage } from "./pages/home/DetailServicePage";
import { BookingPage } from "./pages/home/BookingPage";
import { Dashboard } from "./pages/admin/Dashboard";
import { PengajuanMitra } from "./pages/admin/PengajuanMitra";
import TambahMitra from "./pages/admin/TambahMitra";
import { ConfirmationBookingPage } from "./pages/home/ConfirmationBookingPage";
import { ArtikelPage } from "./pages/home/ArtikelPage";
import { MitraPage } from "./pages/home/MitraPage";
import { DetailKontakPage } from "./pages/home/DetailKontakPage";
import { InformasiUmumPage } from "./pages/home/InformasiUmumPage";
import { DetailLayananPage } from "./pages/home/DetailLayananPage";
import { FotoLayananPage } from "./pages/home/FotoLayananPage";
import { ReviewRegistrasiPage } from "./pages/home/ReviewRegistrasiPage";
import { DashboardUserPage } from "./pages/home/DashboardUserPage";

function App() {
  return (
    <>
      {/* <ScrollToTop/> */}
      <Routes>
        <Route path="/users" element={<UserPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/bengkel" element={<BengkelPage />} />
        <Route path="/towing" element={<TowingPage />} />
        <Route path="/service/detail/:id" element={<DetailServicePage />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/pengajuan-mitra" element={<PengajuanMitra />} />
        <Route path="/admin/pengajuan-mitra/tambah" element={<TambahMitra />} />
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
          path="/registrasi/review/:status"
          element={<ReviewRegistrasiPage />}
        />
        <Route
          path="/booking/confirmation/:id"
          element={<ConfirmationBookingPage />}
        />
        <Route path="/dashboard/*" element={<DashboardUserPage />} />
      </Routes>
    </>
  );
}

export default App;
