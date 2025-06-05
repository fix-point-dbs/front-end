import React from "react";
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
import { LandingPagePresenter } from "../../presenters/home/LandingPagePresenter";
import { useEffect } from "react";
import AOS from "aos";

export function LandingPage() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const presenter = new LandingPagePresenter({ setServices, setIsLoading });

  useEffect(() => {
    presenter.loadServices();
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Service data={services.data} isLoading={isLoading} />
      <Lokasi data={services.data} />
      <About />
      <Artikel />
      <Question />
      <Member />
      <Footer />
    </>
  );
}
