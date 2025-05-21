import React from "react";
import Navbar from "../../views/home/navbar/Navbar";
import Footer from "../../views/home/footer/footer";
import Chat from "../../views/home/layanan/pemesanan/Chat";

export function ChatPage() {
  return (
    <>
      <Navbar />
      <Chat />
      <Footer />
    </>
  );
}
