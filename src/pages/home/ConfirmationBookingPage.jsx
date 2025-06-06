import React from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import { showSuccessToast } from "../../utils/Toast";
import MotionDiv from "../../utils/TransitionSmoth";
export function ConfirmationBookingPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [booking, setBooking] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(id);
  const presenter = new ConfirmationBookingPresenter({ setBooking, id, setIsLoading, onSuccess });
  let data = booking.data ?? {};
  const user_id = Number(getUserId());

  console.log(booking);
  
  function onSuccess() {
    showSuccessToast("Terimakasih telah memberikan feedback");
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
      showSuccessToast("Status Pemesanan Berubah");
    });    

    return () => {
      socket.off("receive_status");
    };

  }, [id]);
  return (
    <>
      {
        data.status === "approved" && <MotionDiv><Accepted data={data} isLoading={isLoading} /></MotionDiv>      
      }
      {
        data.status === "done" && <MotionDiv> <Done data={data} isLoading={isLoading} onSubmit={handleAddReview} /> </MotionDiv>
      }
      {
        data.status === "in progress" && <MotionDiv> <InProgres data={data} isLoading={isLoading} /></MotionDiv>
      }
      {
        data.status === "pending" && <MotionDiv> <Waiting data={data} isLoading={isLoading} /></MotionDiv>
      }
      {
        data.status === "rejected" && <MotionDiv> <Rejected data={data} isLoading={isLoading} /></MotionDiv>
      }
    </>
  );
}
