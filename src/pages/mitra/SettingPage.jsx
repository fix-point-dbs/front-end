import React, { useState, useEffect } from "react";
import Sidebar from "../../views/home/mitra/dashboard/Sidebar";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Pengaturan from "../../views/home/mitra/dashboard/Pengaturan";
import { OrderPresenter } from "../../presenters/mitra/OrderPresenter";
import Navbar from "../../views/home/mitra/dashboard/Navbar";
import MotionDiv from "../../utils/TransitionSmoth";
export function SettingPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const id = 1;


  const presenter = new OrderPresenter({ setOrders, setIsLoading, id });

  console.log(orders);

  useEffect(() => {
    presenter.loadOrders();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 w-full overflow-y-auto bg-gray-50">
        <Navbar setSidebarOpen={setSidebarOpen} />
        <div className="px-10 py-6">
          <AnimatePresence mode="wait">
            <MotionDiv>
              <Pengaturan />
            </MotionDiv>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
