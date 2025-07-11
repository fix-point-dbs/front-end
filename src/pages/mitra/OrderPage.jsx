import React, { useState, useEffect } from "react";
import Sidebar from "../../views/mitra/dashboard/Sidebar";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Pemesanan from "../../views/mitra/dashboard/Pemesanan";
import { OrderPresenter } from "../../presenters/mitra/OrderPresenter";
import Navbar from "../../views/mitra/dashboard/Navbar";
import { io } from "socket.io-client";
const socket = io(import.meta.env.VITE_BASE_URL);
import MotionDiv from "../../utils/TransitionSmoth";
import { getUser } from "../../utils/LocalStorage";

export function OrderPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const id = getUser().id;

  const presenter = new OrderPresenter({setOrders, setIsLoading, id});

  useEffect(() => {
    presenter.loadOrders();
    
  }, []);

  const accept = async (booking_id) => {
    socket.emit("update_status_booking", {
      booking_id: booking_id,
      status: "approved",
    });
    await presenter.updateStatus(booking_id, {
      status: "approved"});
  }

  const reject = async (booking_id) => {
    socket.emit("update_status_booking", {
      booking_id: booking_id,
      status: "rejected",
    })
    await presenter.updateStatus(booking_id, {
      status: "rejected",
    });
  }

  const inProgress = async (booking_id) => {
    socket.emit("update_status_booking", {
      booking_id: booking_id,
      status: "in progress",
    })
    await presenter.updateStatus(booking_id, {
      status: "in progress",
    });
  }

  const onDone = async (booking_id) => {
    socket.emit("update_status_booking", {
      booking_id: booking_id,
      status: "done",
    })
    await presenter.updateStatus(booking_id, {
      status: "done",
    });
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 w-full overflow-y-auto bg-gray-50">
      <Navbar setSidebarOpen={setSidebarOpen} />
        <div className="px-10 py-6">
          <AnimatePresence mode="wait">
            <MotionDiv>
            <Pemesanan orders={orders.data} onAccept={accept} onReject={reject} onInProgress={inProgress} onDone={onDone}/>
            </MotionDiv>
        </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
