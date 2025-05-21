import React from "react";
import Navbar from "../../views/home/navbar/Navbar";
import Footer from "../../views/home/footer/Footer";
import Pemesanan from "../../views/home/layanan/pemesanan/Pemesanan";

export function PemesananPage() {
  return (
    <>
      <Navbar />
      <Pemesanan />
      <Footer />
    </>
  );
}
