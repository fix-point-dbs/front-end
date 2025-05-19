import React from "react";
import Navbar from "../views/navbar/navbar";
import Footer from "../views/footer/footer";
import Bengkel from "../views/layanan/bengkel/bengkel";

export function BengkelPage() {
  return (
    <>
      <Navbar />
      <Bengkel />
      <Footer />
    </>
  );
}
