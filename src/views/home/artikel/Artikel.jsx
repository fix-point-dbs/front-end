import React from "react";
import background from "../../../assets/images/bg-white.png";
import { motion } from "framer-motion";
import ContentArtikel from "./ContentArtikel";

export default function Artikel() {
  return (
    <section className="relative pb-10 overflow-hidden">
      <img
        src={background}
        alt="Hero background"
        className="absolute inset-0 object-cover w-full h-[300px] z-0"
      />
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex flex-col items-center justify-center h-[300px] text-center px-4"
      >
        <h2 className="pt-20 mb-2 text-2xl font-bold text-black">Artikel</h2>
        <p className="mb-8 text-black-600">
          Berikut merupakan kumpulan artikel yang mungkin bermanfaat!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-biru drop-shadow-lg"
      >
        <div className="w-[90%] max-w-7xl mx-auto p-5 text-white">
          Home / <span>Artikel</span>
        </div>
      </motion.div>
      <ContentArtikel />
    </section>
  );
}
