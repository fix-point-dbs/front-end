import React from "react";
import Navbar from "../../views/home/navbar/Navbar";
import Footer from "../../views/home/footer/Footer";
import Bengkel from "../../views/home/layanan/bengkel/bengkel";

export function BengkelPage() {
  return (
    <>
      <Navbar />
      <Bengkel />
      <Footer />
    </>
  );
}
