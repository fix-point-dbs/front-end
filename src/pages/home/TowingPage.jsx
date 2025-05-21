import React from "react";
import Navbar from "../../views/home/navbar/Navbar";
import Footer from "../../views/home/footer/Footer";
import Towing from "../../views/home/layanan/towing/towing";

export function TowingPage() {
  return (
    <>
      <Navbar />
      <Towing />
      <Footer />
    </>
  );
}
