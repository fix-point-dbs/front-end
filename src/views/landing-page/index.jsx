import React,{ useEffect} from "react";
import { motion } from "framer-motion";
import HeroSection from "./hero";
import ServiceSection from "./service";
import CurrentLocationMap from "./lokasi";
import Artikel from "./artikel";
import About from "./about";
import AOS from "aos";
import "aos/dist/aos.css";
import Question from "./question";
import Member from "./member";

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
        <CurrentLocationMap/>
        <Artikel/>
        <About/>
        <Question/>
        <Member/>
      </motion.div>
    </>
  );
}
