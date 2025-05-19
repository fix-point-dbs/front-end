import React from "react";
import Navbar from "../views/navbar/navbar";
import Footer from "../../views/home/footer/footer";
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
