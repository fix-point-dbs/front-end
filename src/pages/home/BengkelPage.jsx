import React from "react";
import Navbar from "../views/navbar/navbar";
import Footer from "../../views/home/footer/footer";
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
