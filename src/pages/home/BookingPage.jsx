import React from "react";
import Navbar from "../../views/home/navbar/Navbar";
import Footer from "../../views/home/footer/Footer";
import Pemesanan from "../../views/home/layanan/pemesanan/Pemesanan";
import { BookingPresenter } from "../../presenters/home/BookingPresenter";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export function BookingPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [service, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const presenter = new BookingPresenter({ setServices, id, setIsLoading, onSuccess});

  useEffect(() => {
    presenter.loadServices();
  }, []);

  const handleAdd = async (booking) => {
    booking.service_id = id;
    booking.status = "pending";
    
    await presenter.addBooking(booking);
  }

  function onSuccess(booking_id) {
    alert("Pemesanan Berhasil");
    navigate(`/booking/confirmation/${booking_id}`);
  }
  return (
    <>
      <Navbar />
      <Pemesanan data={service.data} isLoading={isLoading} onSubmit={handleAdd} />
      <Footer />
    </>
  );
}
