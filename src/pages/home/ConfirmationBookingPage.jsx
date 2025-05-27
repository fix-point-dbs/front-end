import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../views/home/navbar/Navbar";
import Footer from "../../views/home/footer/Footer";
import { ConfirmationBookingPresenter } from "../../presenters/home/ConfirmationBookingPresenter";
import { useState, useEffect } from "react";
import Accepted from "../../views/home/layanan/pemesanan/konfirmasi/Accepted";
import Done from "../../views/home/layanan/pemesanan/konfirmasi/Done";
import OnTheWay from "../../views/home/layanan/pemesanan/konfirmasi/OnTheWay";
import Waiting from "../../views/home/layanan/pemesanan/konfirmasi/Waiting";
import Rejected from "../../views/home/layanan/pemesanan/konfirmasi/Rejected";
export function ConfirmationBookingPage() {
  const { id } = useParams();
  const [booking, setBooking] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(id);
  const presenter = new ConfirmationBookingPresenter({ setBooking, id, setIsLoading });
  const data = booking.data ?? {};
  const status = data.status ?? 'pending';
  
  useEffect(() => {
    presenter.loadBooking();
  }, []);
  return (
    <>
      {
        status === "approved" && <Accepted data={data} isLoading={isLoading} />
      }
      {
        status === "done" && <Done data={data} isLoading={isLoading} />
      }
      {
        status === "in progress" && <OnTheWay data={data} isLoading={isLoading} />
      }
      {
        status === "pending" && <Waiting data={data} isLoading={isLoading} />
      }
      {
        status === "rejected" && <Rejected data={data} isLoading={isLoading} />
      }
    </>
  );
}
