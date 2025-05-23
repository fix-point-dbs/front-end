import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../views/home/navbar/Navbar";
import Hero from "../../views/home/landing-page/Hero";
import Service from "../../views/home/landing-page/Service";
import Lokasi from "../../views/home/landing-page/Lokasi";
import Artikel from "../../views/home/landing-page/Artikel";
import About from "../../views/home/landing-page/About";
import Question from "../../views/home/landing-page/Question";
import Member from "../../views/home/landing-page/Member";
import Footer from "../../views/home/footer/Footer";
import { useState } from "react";
import { ServicePresenter } from "../../presenters/ServicePresenter";
import { useEffect } from "react";
import AOS from "aos";

export function LandingPage() {
  const [services, setServices] = useState([]);

  const presenter = new ServicePresenter({ setServices });

  useEffect(() => {
    presenter.loadServices();
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  // console.log(services.data);

  return (
    <>
      <Navbar />
      <Hero />
      <Service data={services.data} />
      <Lokasi data={services.data}/>
      <About />
      <Artikel />
      <Question />
      <Member />
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
