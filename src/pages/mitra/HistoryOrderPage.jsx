import React, { useState, useEffect } from "react";
import Sidebar from "../../views/mitra/dashboard/Sidebar";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HistoryOrder from "../../views/mitra/dashboard/HistoryOrder";
import { HistoryOrderPresenter } from "../../presenters/mitra/HistoryOrderPresenter";
import Navbar from "../../views/mitra/dashboard/Navbar";
import MotionDiv from "../../utils/TransitionSmoth";

export function HistoryOrderPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const id = 1;

  const presenter = new HistoryOrderPresenter({setOrders, setIsLoading, id});

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
            <HistoryOrder orders={orders.data}/>
            </MotionDiv>
        </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
