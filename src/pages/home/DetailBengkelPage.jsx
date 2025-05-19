import React from "react";
import Navbar from "../../views/home/navbar/Navbar";
import Footer from "../../views/home/footer/footer";
import Detail from "../../views/home/layanan/bengkel/detail";

export function DetailBengkelPage() {
  return (
    <>
      <Navbar />
      <Detail />
      <Footer />
    </>
  );
}
