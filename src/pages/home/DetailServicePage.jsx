import React from "react";
import Navbar from "../../views/home/navbar/Navbar";
import Footer from "../../views/home/footer/Footer";
import Detail from "../../views/home/layanan/bengkel/detail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailServicePresenter } from "../../presenters/DetailServicePresenter";
export function DetailServicePage() {
  const { id } = useParams();
  const [service, setService] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const presenter = new DetailServicePresenter({ setService, setIsLoading, id });

    useEffect(() => {
      presenter.loadService();
    }, []);
  
  return (
    <>
      <Navbar />
      <Detail data={service.data} isLoading={isLoading} />
      <Footer />
    </>
  );
}
