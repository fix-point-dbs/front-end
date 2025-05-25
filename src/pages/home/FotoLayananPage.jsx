import React, { useState } from "react";
import StepCard from "../../views/home/mitra/registrasi-layanan/StepCard";
import FormFotoLayanan from "../../views/home/mitra/registrasi-layanan/FormFotoLayanan";
import Navbar from "../../views/home/navbar/Navbar";
import Footer from "../../views/home/footer/Footer";
import background from "../../assets/images/bg-white.png";
import { motion } from "framer-motion";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function FotoLayananPage() {
  const [activeStep, setActiveStep] = useState(4);
  const [formData, setFormData] = useState({
    fotoLayanan: [], 
  });

  return (
    <>
      <Navbar />
      <section className="w-[90%] max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-[60px] overflow-hidden bg-cover bg-center bg-no-repeat mb-10">
        <img
          src={background}
          alt="Hero background"
          className="absolute inset-0 z-0 object-cover w-full h-[300px] sm:h-[300px] lg:h-[300px]"
        />
        <div className="relative z-10 ">
          <h2 className="pt-20 mb-10 text-2xl font-bold text-center text-black sm:pt-20">
            Registrasi Layanan Pemesanan
          </h2>

          <div className="flex items-start w-full max-w-6xl p-5 mb-6 space-x-3 bg-white shadow-md rounded-xl">
            <div className="text-2xl">
              <FontAwesomeIcon icon={faBullhorn} className="mr-2 text-biru" />
            </div>
            <div>
              <p className="text-sm font-bold text-black sm:text-base">
                Selamat Datang Kembali!
              </p>
              <p className="text-xs text-gray-600 sm:text-sm">
                Silahkan daftarkan layanan anda pada form yang disediakan
                dibawah ini!
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full max-w-6xl gap-4 mb-10 md:flex-row">
            <StepCard activeStep={activeStep} />
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <FormFotoLayanan
                formData={formData}
                setFormData={setFormData}
                setStep={setActiveStep}
              />
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
  