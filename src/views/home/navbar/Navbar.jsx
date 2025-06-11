import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { isLoggedIn, getRole, getUser } from "../../../utils/LocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useHandleLogout } from "../../../utils/Logout";
export default function Navbar() {
  const handleLogout = useHandleLogout();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setDropdownOpen(false);
    }
  }, [menuOpen]);

  function handleMouseEnter() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setDropdownOpen(true);
  }

  const checkRole = () => {
    const role = getRole();
    if (role === "admin") return "/admin/dashboard";
    if (role === "mitra") return "/dashboard-mitra/statistic";
    return "/dashboard-user/booking";
  };

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  }

  const getUserName = () => {
    const user = getUser(); // Sesuaikan dengan key yg kamu pakai
    return user?.name || "Pengguna";
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        <div className="flex items-center gap-10">
          <img src={logo} alt="Fixpoint Logo" className="h-10" />
          <ul className="items-center hidden gap-8 font-medium md:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-black" : "text-gray-500"
                }
              >
                Beranda
              </NavLink>
            </li>
            <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-gray-500 hover:text-oranye focus:outline-none">
                Layanan
                <svg
                  className="inline-block w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <ul className="absolute left-0 z-50 mt-1 border border-gray-300 rounded shadow-lg w-35 top-full bg-putih">
                  <li>
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        `block px-4 py-2 transition hover:bg-oranye hover:text-putih ${
                          isActive ? "text-black" : "text-gray-500"
                        }`
                      }
                    >
                      Bengkel
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        `block px-4 py-2 transition hover:bg-oranye hover:text-putih ${
                          isActive ? "text-black" : "text-gray-500"
                        }`
                      }
                    >
                      Towing
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink
                to="/artikel"
                className={({ isActive }) =>
                  isActive ? "text-black" : "text-gray-500"
                }
              >
                Artikel
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/mitra"
                className={({ isActive }) =>
                  isActive ? "text-black" : "text-gray-500"
                }
              >
                Mitra
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="items-center hidden gap-3 md:flex">

        <div className="relative">
      {isLoggedIn() ? (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => setOpen(!open)}
        >
          <span className="font-semibold text-gray-700">
            {getUserName()}
          </span>
          <FontAwesomeIcon icon={faUser} className="w-5 h-5 text-biru" />
        </div>
      ) : (
        <div className="flex gap-2">
          <Link
            to="/login"
            className="border border-biru text-biru font-semibold px-4 py-1.5 rounded-md text-sm hover:bg-biru/10"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-biru text-putih font-semibold px-4 py-1.5 rounded-md text-sm hover:bg-biru/90"
          >
            Register
          </Link>
        </div>
      )}

     
    </div>
         
        </div>

        <button
          className="md:hidden text-biru focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="#0033A1"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8h16M4 16h16"
            />
          </svg>
        </button>
      </div>

       {open && (
        <div className="absolute right-20 top-14 border w-40 bg-white rounded-md shadow-lg z-50">
          
          <Link
          to={checkRole()}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-oranye hover:text-white"
          >
            Dashboard
          </Link>
          <button
          type="button"
            onClick={() => {handleLogout(); setOpen(false);}}
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-oranye hover:text-white"
          >
            Logout
          </button>
        </div>
      )}

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black opacity-50"
            onClick={() => setMenuOpen(false)}
          />

          <div className="fixed bottom-0 left-0 right-0 bg-putih rounded-t-xl shadow-lg z-50 px-6 pt-6 pb-8 max-h-[80vh] overflow-auto font-montserrat font-medium">
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="absolute top-4 right-4 mb-[10px] text-biru focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <ul className="space-y-3 mt-[10px]">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-black block" : "text-gray-500 block"
                  }
                >
                  Beranda
                </NavLink>
              </li>
              <li>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center justify-between w-full text-left text-gray-500 hover:text-oranye"
                >
                  Layanan
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {dropdownOpen && (
                  <ul className="pl-4 mt-2 space-y-2">
                    <li>
                      <NavLink
                        to="/bengkel"
                        className={({ isActive }) =>
                          isActive ? "text-black block" : "text-gray-500 block"
                        }
                      >
                        Bengkel
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/towing"
                        className={({ isActive }) =>
                          isActive ? "text-black block" : "text-gray-500 block"
                        }
                      >
                        Towing
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <NavLink
                  to="/artikel"
                  className={({ isActive }) =>
                    isActive ? "text-black block" : "text-gray-500 block"
                  }
                >
                  Artikel
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/mitra"
                  className={({ isActive }) =>
                    isActive ? "text-black block" : "text-gray-500 block"
                  }
                >
                  Mitra
                </NavLink>
              </li>
            </ul>

            <div className="flex gap-3 pt-4">
              <Link
                to="/login"
                className="w-full px-4 py-2 text-sm font-semibold text-center border rounded-md border-biru text-biru hover:bg-biru/10"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="w-full px-4 py-2 text-sm font-semibold text-center rounded-md bg-biru text-putih hover:bg-biru/90"
              >
                Register
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
