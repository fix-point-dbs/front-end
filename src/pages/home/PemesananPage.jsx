import React from "react";
import Navbar from "../../views/home/navbar/Navbar";
import Footer from "../../views/home/footer/footer";
import Pemesanan from "../../views/home/layanan/pemesanan";

export function PemesananPage() {
  return (
    <>
      <Navbar />
      <Pemesanan />
      <Footer />
    </>
  );
}
