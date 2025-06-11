import React, { useState, useEffect } from "react";
import Sidebar from "../../views/mitra/dashboard/Sidebar";
import { Routes, Route, } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Dashboard from "../../views/mitra/dashboard/Dashboard";
import { DashboardMitraPresenter } from "../../presenters/mitra/DashboardMitraPresenter";
import Navbar from "../../views/mitra/dashboard/Navbar";
import MotionDiv from "../../utils/TransitionSmoth";
import { getUser } from "../../utils/LocalStorage";
export function DashboardMitraPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [statistics, setStatistics] = useState([]);
  const [result, setResult] = useState([]);
  const id = getUser().id;

  const presenter = new DashboardMitraPresenter({setBookings, setStatistics, setResult, id});
  
  console.log(bookings);
  console.log(statistics);
  console.log(result);
  
  useEffect(() => {
    presenter.loadDashboard();
    
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 w-full overflow-y-auto bg-gray-50">
      <Navbar setSidebarOpen={setSidebarOpen} />
        <div className="px-10 py-6">
          <AnimatePresence mode="wait">
            <MotionDiv>
            <Dashboard bookings={bookings.data} statistics={statistics.data} result={result} />
            </MotionDiv>
        </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
