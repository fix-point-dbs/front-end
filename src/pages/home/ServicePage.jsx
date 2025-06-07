import React, { useEffect, useState } from "react";
import Navbar from "../../views/home/navbar/Navbar";
import Footer from "../../views/home/footer/Footer";
import FilterLayanan from "../../views/home/layanan/FilterLayanan";
import { ServicePresenter } from "../../presenters/home/ServicePresenter";
export function ServicePage() {
  const [services, setServices] = useState([]);
  const servicePresenter = new ServicePresenter({setServices});

  console.log(services);
  

  useEffect(() => {
    servicePresenter.loadServices();
  }, []);
  return (
    <>
      <Navbar />
      <FilterLayanan services={services.data} />
      <Footer />
    </>
  );
}
