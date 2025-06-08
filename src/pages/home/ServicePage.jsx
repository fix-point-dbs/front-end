import React, { useEffect, useState } from "react";
import Navbar from "../../views/home/navbar/Navbar";
import Footer from "../../views/home/footer/Footer";
import FilterLayanan from "../../views/home/layanan/FilterLayanan";
import { ServicePresenter } from "../../presenters/home/ServicePresenter";
import { getCurrentPosition } from "../../utils/GeoLocation";
export function ServicePage() {
  const [services, setServices] = useState([]);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  
  const servicePresenter = new ServicePresenter({ setServices, lat, lng });
  console.log(services);

  useEffect(() => {
    getCurrentPosition(
      (pos) => {
        setLat(pos.coords.latitude);
        setLng(pos.coords.longitude);
      },
      (err) => {
        console.error("Gagal ambil lokasi", err);
        alert("Tidak bisa mengambil lokasi. Periksa pengaturan browser.");
      }
    );
  }, []);

  useEffect(() => {
    servicePresenter.loadServices();
  }, [lat, lng]);
  return (
    <>
      <Navbar />
      <FilterLayanan services={services.data} />
      <Footer />
    </>
  );
}
