import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { UserPage } from "./pages/UserPage";
import { LandingPage } from "./pages/LandingPage";
import { BengkelPage } from "./pages/BengkelPage";
import { TowingPage } from "./pages/TowingPage";
import { DetailBengkelPage } from "./pages/DetailBengkelPage";
import { PemesananPage } from "./pages/PemesananPage";

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
        <Route path="/bengkel/pemesanan" element={<PemesananPage />} />
      </Routes>
    </>
  );
}

export default App;
