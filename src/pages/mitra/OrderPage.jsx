import React, { useState, useEffect } from "react";
import Sidebar from "../../views/home/mitra/dashboard/Sidebar";
import { FaBars } from "react-icons/fa";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Pemesanan from "../../views/home/mitra/dashboard/Pemesanan";
import { OrderPresenter } from "../../presenters/mitra/OrderPresenter";
import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

export function OrderPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const id = 1;

  const presenter = new OrderPresenter({setOrders, setIsLoading, id});

  console.log(orders);
  
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
        <div className="px-10 py-6 bg-white border-b shadow">
          <div className="flex items-center gap-4">
            <button
              className="p-2 rounded text-biru md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <FaBars />
            </button>
            <h1 className="text-base font-bold sm:text-base md:text-medium lg:text-medium text-biru">
              Halo, Etak!
            </h1>
          </div>
        </div>

        <div className="px-10 py-6">
          <AnimatePresence mode="wait">
            <Pemesanan orders={orders.data} onAccept={accept} onReject={reject} onInProgress={inProgress} onDone={onDone}/>
        </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
