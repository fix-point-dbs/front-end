import React from "react";
import Navbar from "../../views/home/navbar/Navbar";
import Footer from "../../views/home/footer/Footer";
import { Konfirmasi } from "../../views/home/layanan/pemesanan/konfirmasi/konfirmasi";

export function KonfirmasiPemesananPage() {
  return (
    <>
      <Navbar />
      <Konfirmasi />

      <Footer />
    </>
  );
}
