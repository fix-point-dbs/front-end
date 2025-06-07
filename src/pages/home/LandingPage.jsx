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
import { getCurrentPosition } from "../../utils/GeoLocation";

export function LandingPage() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [position, setPosition] = useState(null);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  const presenter = new LandingPagePresenter({ setServices, setIsLoading, lat, lng });
  console.log(services);
  

  useEffect(() => {
    getCurrentPosition(
          (pos) => {
            setPosition([pos.coords.latitude, pos.coords.longitude]);
            setLat(pos.coords.latitude);
            setLng(pos.coords.longitude);
          },
          (err) => {
            console.error("Gagal ambil lokasi", err);
            alert("Tidak bisa mengambil lokasi. Periksa pengaturan browser.");
          }
        );
        AOS.init({
          duration: 1000,
          once: true,
        });
        
  }, []);

  useEffect(() => {
    presenter.loadServices();
  }, [lat, lng]);

  return (
    <>
      <Navbar />
      <Hero />
      <Service data={services.data} isLoading={isLoading} />
      <Lokasi data={services.data} position={position} />
      <About />
      <Artikel />
      <Question />
      <Member />
      <Footer />
    </>
  );
}
