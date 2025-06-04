import React, { useState } from "react";
import Sidebar from "../../views/user/dashboard/Sidebar";
import { FaBars } from "react-icons/fa";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import RiwayatTransaksi from "../../views/user/dashboard/RiwayatTransaksi";
import Pengaturan from "../../views/user/dashboard/Pengaturan";

export function DashboardUserPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

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
            <Routes location={location} key={location.pathname}>
              <Route
                path="transaksi"
                element={
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <RiwayatTransaksi />
                  </motion.div>
                }
              />
              <Route
                path="pengaturan"
                element={
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Pengaturan />
                  </motion.div>
                }
              />
              <Route
                path="*"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <RiwayatTransaksi />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
