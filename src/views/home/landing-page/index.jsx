import React,{ useEffect} from "react";
import { motion } from "framer-motion";
import HeroSection from "./Hero";
import ServiceSection from "./Service";
import CurrentLocationMap from "./Lokasi";
import Artikel from "./Artikel";
import About from "./About";
import AOS from "aos";
import "aos/dist/aos.css";
import Question from "./Question";
import Member from "./Member";

export function IndexPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
    });
  }, []);
  return (
    <>
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroSection />
        <ServiceSection />
        <CurrentLocationMap />
        <About />
        <Artikel />
        <Question />
        <Member />
      </motion.div>
    </>
  );
}
