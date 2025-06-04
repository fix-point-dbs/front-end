import React, { useState, useEffect } from "react";
import Sidebar from "../../views/user/dashboard/Sidebar";
import { FaBars } from "react-icons/fa";
import Pengaturan from "../../views/user/dashboard/Pengaturan";
import { Routes, Route } from "react-router-dom";
import MotionDiv from "../../utils/TransitionSmoth";
import { BookingUserPresenter } from "../../presenters/user/BookingUserPresenter";

export function SettingUserPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [bookings, setBookings] = useState([]);
  const id = 1;
  const presenter = new BookingUserPresenter({ setBookings, id });

  console.log(bookings);
  
  useEffect(() => {
    presenter.loadBooking();
  }, []);

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
          <MotionDiv>
            <Pengaturan />
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}
