import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../views/home/navbar/Navbar";
import Footer from "../../views/home/footer/Footer";
import { Konfirmasi } from "../../views/home/layanan/pemesanan/konfirmasi/konfirmasi";

export function KonfirmasiPemesananPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get("status") || "waiting"; // default waiting

  return (
    <>
      <Navbar />
      <Konfirmasi status={status} />
      <Footer />
    </>
  );
}
