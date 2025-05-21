import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "./pages/home/LoginPage";
import { UserPage } from "./pages/home/UserPage";
import { LandingPage } from "./pages/home/LandingPage";
import { BengkelPage } from "./pages/home/BengkelPage";
import { TowingPage } from "./pages/home/TowingPage";
import { DetailBengkelPage } from "./pages/home/DetailBengkelPage";
import { PemesananPage } from "./pages/home/PemesananPage";
import { KonfirmasiPemesananPage } from "./pages/home/KonfirmasiPemesananPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/users" element={<UserPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/bengkel" element={<BengkelPage />} />
        <Route path="/towing" element={<TowingPage />} />
        <Route path="/bengkel/detail" element={<DetailBengkelPage />} />
        <Route path="/pemesanan" element={<PemesananPage />} />
        <Route
          path="/pemesanan/konfirmasi"
          element={<KonfirmasiPemesananPage />}
        />
      </Routes>
    </>
  );
}

export default App;
