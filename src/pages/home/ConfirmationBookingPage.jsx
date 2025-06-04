import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../views/home/navbar/Navbar";
import Footer from "../../views/home/footer/Footer";
import { ConfirmationBookingPresenter } from "../../presenters/home/ConfirmationBookingPresenter";
import { useState, useEffect } from "react";
import Accepted from "../../views/home/layanan/pemesanan/konfirmasi/Accepted";
import Done from "../../views/home/layanan/pemesanan/konfirmasi/Done";
import InProgres from "../../views/home/layanan/pemesanan/konfirmasi/InProgres";
import Waiting from "../../views/home/layanan/pemesanan/konfirmasi/Waiting";
import Rejected from "../../views/home/layanan/pemesanan/konfirmasi/Rejected";
import { getUserId } from "../../lib/auth";
import { io } from "socket.io-client";
const socket = io("http://localhost:3000");
export function ConfirmationBookingPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [booking, setBooking] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(id);
  const presenter = new ConfirmationBookingPresenter({ setBooking, id, setIsLoading, onSuccess });
  let data = booking.data ?? {};
  const status = data?.status;
  const user_id = Number(getUserId());

  console.log(booking);
  
  function onSuccess() {
    alert("Pemesanan Berhasil");
    navigate('/');
  }

  const handleAddReview = async (review) => {
    review.service_id = Number(booking.data.service_id);
    review.user_id = user_id;
    await presenter.addReview(review);
  }
  
  useEffect(() => {
    presenter.loadBooking();

    socket.emit("join_booking", id);
    socket.on("receive_status", (updatedBooking) => {
      setBooking((prev) => ({
        data: {
          ...prev.data,
          ...updatedBooking
        }
      }));
    });    

    return () => {
      socket.off("receive_status");
    };

  }, [id]);
  return (
    <>
      {
        data.status === "approved" && <Accepted data={data} isLoading={isLoading} />
      }
      {
        data.status === "done" && <Done data={data} isLoading={isLoading} onSubmit={handleAddReview} />
      }
      {
        data.status === "in progress" && <InProgres data={data} isLoading={isLoading} />
      }
      {
        data.status === "pending" && <Waiting data={data} isLoading={isLoading} />
      }
      {
        data.status === "rejected" && <Rejected data={data} isLoading={isLoading} />
      }
    </>
  );
}
