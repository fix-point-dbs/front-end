import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../views/home/navbar/Navbar";
import Footer from "../../views/home/footer/Footer";
import { IndexPage } from "../../views/home/landing-page/Index";

export function LandingPage() {
  return (
    <>
      <Navbar />
      <IndexPage />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Footer />
      </motion.div>
    </>
  );
}
