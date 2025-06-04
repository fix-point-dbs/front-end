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
import ChatBoth from "../ChatBotPage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import MotionDiv from "../../utils/TransitionSmoth";

export function LandingPage() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showChat, setShowChat] = useState(false); // 👈 tambahkan state ini

  const presenter = new LandingPagePresenter({ setServices, setIsLoading });

  useEffect(() => {
    presenter.loadServices();
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <div
        className="fixed bottom-5 right-5 bg-blue-700 text-white px-4 py-2 rounded-full cursor-pointer z-50 hover:bg-blue-800"
        onClick={() => setShowChat(true)}
      >
        <FontAwesomeIcon icon={faComments} className="w-7 h-7" />
      </div>

      <ChatBoth visible={showChat} onClose={() => setShowChat(false)} />

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
