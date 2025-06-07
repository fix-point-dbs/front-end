import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
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
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(null);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("dashboard")) setActiveItem("dashboard");
    else if (path.includes("pengajuan-mitra")) setActiveItem("pengajuan-mitra");
    else if (path.includes("mitra")) setActiveItem("mitra");
    else if (path.includes("booking")) setActiveItem("pemesanan");
    else if (path.includes("users")) setActiveItem("user");
    else if (path.includes("laporan")) setActiveItem("laporan");
    else if (path.includes("logout")) setActiveItem("Logout");
  }, [location.pathname]);

  const baseClass = "flex items-center w-full mx-1 px-6 py-3 text-base rounded-lg transition-colors";
  const iconBase = "w-5 h-5 mr-3 p-1";

  const getLinkClass = (id) =>
    activeItem === id
      ? "bg-white dark:bg-gray-700 text-black dark:text-gray-100"
      : "text-gray-400 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-gray-100";

  const getIconClass = (id) =>
    activeItem === id
      ? "text-white bg-biru dark:bg-blue-500 rounded-lg"
      : "text-biru dark:text-blue-400 bg-white dark:bg-gray-700 p-2 rounded-lg";

  return (
    <>
      {/* Toggle button for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-biru dark:bg-blue-600 text-white dark:text-gray-200 rounded-lg focus:outline-none"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="w-5 h-4" />
      </button>

      {/* Sidebar */}
      <aside
        className={`w-64 h-screen bg-gray-50 dark:bg-gray-800 fixed top-0 left-0 z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static`}
      >
        <div className="flex justify-center p-5 border-b border-gray-100 dark:border-gray-700">
          <img src={logo} alt="Fixpoint Logo" className="h-14 w-36 object-contain" />
        </div>

        <div className="py-4 flex flex-col h-[calc(100%-7rem)]">
          <ul className="space-y-2 flex-1 px-3">
            <li>
              <Link
                to="/admin/dashboard"
                className={`${baseClass} ${getLinkClass("dashboard")}`}
                onClick={() => {
                  setActiveItem("dashboard");
                  setIsOpen(false);
                }}
              >
                <FontAwesomeIcon icon={faHome} className={`${iconBase} ${getIconClass("dashboard")}`} />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/admin/pengajuan-mitra"
                className={`${baseClass} ${getLinkClass("pengajuan-mitra")}`}
                onClick={() => {
                  setActiveItem("pengajuan-mitra");
                  setIsOpen(false);
                }}
              >
                <FontAwesomeIcon icon={faFileAlt} className={`${iconBase} ${getIconClass("pengajuan-mitra")}`} />
                Pengajuan
              </Link>
            </li>
            <li>
              <Link
                to="/admin/mitra"
                className={`${baseClass} ${getLinkClass("mitra")}`}
                onClick={() => {
                  setActiveItem("mitra");
                  setIsOpen(false);
                }}
              >
                <FontAwesomeIcon icon={faHandshake} className={`${iconBase} ${getIconClass("mitra")}`} />
                Mitra
              </Link>
            </li>
            <li>
              <Link
                to="/admin/booking"
                className={`${baseClass} ${getLinkClass("pemesanan")}`}
                onClick={() => {
                  setActiveItem("pemesanan");
                  setIsOpen(false);
                }}
              >
                <FontAwesomeIcon icon={faShoppingCart} className={`${iconBase} ${getIconClass("pemesanan")}`} />
                Pemesanan
              </Link>
            </li>
            <li>
              <Link
                to="/admin/users"
                className={`${baseClass} ${getLinkClass("user")}`}
                onClick={() => {
                  setActiveItem("user");
                  setIsOpen(false);
                }}
              >
                <FontAwesomeIcon icon={faUser} className={`${iconBase} ${getIconClass("user")}`} />
                User
              </Link>
            </li>
            <li>
              <Link
                to="/admin/laporan"
                className={`${baseClass} ${getLinkClass("laporan")}`}
                onClick={() => {
                  setActiveItem("laporan");
                  setIsOpen(false);
                }}
              >
                <FontAwesomeIcon icon={faChartBar} className={`${iconBase} ${getIconClass("laporan")}`} />
                Laporan
              </Link>
            </li>
            <li>
              <Link
                to="/logout"
                className={`${baseClass} ${getLinkClass("Logout")}`}
                onClick={() => {
                  setActiveItem("Logout");
                  setIsOpen(false);
                }}
              >
                <FontAwesomeIcon icon={faRightFromBracket} className={`${iconBase} ${getIconClass("Logout")}`} />
                Logout
              </Link>
            </li>
          </ul>

          {/* Theme toggle button */}
          <div className="px-3 mt-auto">
            <button
              onClick={toggleTheme}
              className="flex items-center w-full mx-1 px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="w-5 h-5 mr-3" />
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </aside>

      {/* Background overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-70 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
