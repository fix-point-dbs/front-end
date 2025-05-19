import React from "react";
import Navbar from "../views/navbar/navbar";
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
