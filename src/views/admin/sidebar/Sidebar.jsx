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
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: faHome, path: "/admin/dashboard" },
    { id: "pengajuan-mitra", name: "Pengajuan Mitra", icon: faFileAlt, path: "/admin/pengajuan-mitra" },
    { id: "mitra", name: "Mitra", icon: faHandshake, path: "/admin/mitra" },
    { id: "pemesanan", name: "Pemesanan", icon: faShoppingCart, path: "/admin/booking" },
    { id: "user", name: "User", icon: faUser, path: "/admin/user" },
    { id: "laporan", name: "Laporan", icon: faChartBar, path: "/admin/laporan" },
    { id: "Logout", name: "Logout", icon: faRightFromBracket, path: "/logout" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Set initial theme
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;
    const activeMenu = menuItems.find((item) => item.path === currentPath);
    if (activeMenu) {
      setActiveItem(activeMenu.id);
    }
  }, [location.pathname]);

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-biru dark:bg-blue-600 text-white dark:text-gray-200 rounded-lg focus:outline-none dark:focus:ring-blue-400"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="w-5 h-4" />
      </button>

      <aside
        className={`w-64 h-screen bg-gray-50 dark:bg-gray-800 fixed top-0 left-0 z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:w-64`}
      >
        <div className="flex justify-center p-5 border-b border-gray-100 dark:border-gray-700">
          <div className="relative h-14 w-36">
            <img src={logo} alt="Fixpoint Logo" className="h-full w-full object-contain" />
          </div>
        </div>
        <div className="py-4 flex flex-col h-[calc(100%-7rem)]">
          <ul className="space-y-2 flex-1">
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
                      ? "bg-white dark:bg-gray-700 text-black dark:text-gray-100"
                      : "text-gray-400 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-gray-100"
                  }`}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className={`w-5 h-5 mr-3 p-1 ${
                      activeItem === item.id
                        ? "text-white bg-biru dark:bg-blue-500 rounded-lg"
                        : "text-biru dark:text-blue-400 bg-white dark:bg-gray-700 p-2 rounded-lg"
                    }`}
                  />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-3 mt-auto">
            <button
              onClick={toggleTheme}
              className="flex items-center w-full mx-1 px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="w-5 h-5 mr-3" />
              <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </div>
        </div>
      </aside>

      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-70 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
