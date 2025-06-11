import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaHome,
  FaCog,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";
import logo from "../../../assets/images/logo.png";
import { useEffect } from "react";
import { getUser } from "../../../utils/LocalStorage";
import { useHandleLogout } from "../../../utils/Logout";
export default function Sidebar({ isOpen, onClose }) {
  const logout = useHandleLogout();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    logout();
  };

  const activePage = location.pathname.split("/")[2];
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location.pathname]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
          onClick={onClose}
        ></div>
      )}

      <div
        className={`
          fixed top-0 left-0 z-20 h-full bg-white shadow-md transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:relative md:w-64
        `}
      >
        <div className="flex flex-col justify-between h-full p-4">
          <div>
            <div className="mb-2 md:hidden">
              <button onClick={onClose} className="text-gray-600">
                <FaTimes />
              </button>
            </div>

            <div className="flex flex-col items-center mb-6">
              <img src={logo} alt="Logo" className="w-32 mb-4" />
              <div className="w-full p-4 text-center border rounded-xl">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-20 h-20 mb-2 bg-orange-300 rounded-full">
                    <div className="w-10 h-10 bg-blue-600 rounded-full" />
                  </div>
                  <h2 className="font-semibold">{getUser().name}</h2>
                  <div className="mt-1 text-sm text-gray-600">
                    <div className="flex items-center justify-center gap-2">
                      <FaPhone className="text-blue-700" />
                      <span>{getUser().phone}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-1">
                      <FaEnvelope className="text-blue-700" />
                      <span>{getUser().email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full gap-2 text-sm">
              <button
                onClick={() => navigate("/dashboard-user/booking")}
                className={`flex items-center gap-2 px-4 py-2 font-semibold rounded
                  ${
                    activePage === "transaksi"
                      ? "bg-gray-100 text-biru"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
              >
                <FaHome />
                Transaksi
              </button>
              <button
                onClick={() => navigate("/dashboard-user/settings")}
                className={`flex items-center gap-2 px-4 py-2 font-semibold rounded
                  ${
                    activePage === "pengaturan"
                      ? "bg-gray-100 text-biru"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
              >
                <FaCog />
                Pengaturan
              </button>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center justify-center w-full gap-2 py-2 mt-6 font-bold text-white bg-red-600 rounded hover:bg-red-700"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
