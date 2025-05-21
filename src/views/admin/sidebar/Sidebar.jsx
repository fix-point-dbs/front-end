import React, { useState } from "react";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFileAlt,
  faHandshake,
  faShoppingCart,
  faUser,
  faChartBar,
  faRightFromBracket,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: faHome, path: "/dashboard" },
    { id: "pengajuan-mitra", name: "Pengajuan Mitra", icon: faFileAlt, path: "/pengajuan-mitra" },
    { id: "mitra", name: "Mitra", icon: faHandshake, path: "/mitra" },
    { id: "pemesanan", name: "Pemesanan", icon: faShoppingCart, path: "/pemesanan" },
    { id: "user", name: "User", icon: faUser, path: "/user" },
    { id: "laporan", name: "Laporan", icon: faChartBar, path: "/laporan" },
    { id: "Logout", name: "Logout", icon: faRightFromBracket, path: "/logout" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-biru text-white rounded-lg focus:outline-none"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="w-5 h-4" />
      </button>

      <aside
        className={`w-64 h-screen bg-gray-50 fixed top-0 left-0 z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:w-64`}
      >
        <div className="flex justify-center p-5 border-b border-gray-100">
          <div className="relative h-14 w-36">
            <img src={logo} alt="Fixpoint Logo" className="h-full w-full object-contain" />
          </div>
        </div>
        <div className="py-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id} className="px-3">
                <Link
                  to={item.path}
                  onClick={() => {
                    setActiveItem(item.id);
                    setIsOpen(false);
                  }}
                  className={`flex items-center w-full mx-1 px-6 py-3 text-base rounded-lg transition-colors ${
                    activeItem === item.id
                      ? "bg-white text-black"
                      : "text-gray-400 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className={`w-5 h-5 mr-3 p-1 ${
                      activeItem === item.id ? "text-white bg-biru rounded-lg" : "text-biru bg-white p-2 rounded-lg"
                    }`}
                  />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}