import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setDropdownOpen(false);
    }
  }, [menuOpen]);

  const menuVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: 0 },
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      pointerEvents: "none",
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      y: 0,
      pointerEvents: "auto",
      transition: { duration: 0.2 },
    },
  };

  function handleMouseEnter() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setDropdownOpen(true);
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  }

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        <div className="flex items-center gap-10">
          <img src={logo} alt="Fixpoint Logo" className="h-10" />

          <ul className="items-center hidden space-x-8 font-medium md:flex">
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
              <button className="flex items-center gap-1 text-gray-500 hover:text-oranye focus:outline-none">
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

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.ul
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="absolute left-0 z-50 w-40 mt-1 border border-gray-300 rounded shadow-lg top-full bg-putih"
                  >
                    <li>
                      <NavLink
                        to="/bengkel"
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
                        to="/towing"
                        className={({ isActive }) =>
                          `block px-4 py-2 transition hover:bg-oranye hover:text-putih ${
                            isActive ? "text-black" : "text-gray-500"
                          }`
                        }
                      >
                        Towing
                      </NavLink>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
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

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              transition={{ duration: 0.3 }}
              className="fixed bottom-0 left-0 right-0 bg-putih rounded-t-xl shadow-lg z-50 px-6 pt-6 pb-8 max-h-[80vh] overflow-auto font-montserrat font-medium"
            >
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
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.ul
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={menuVariants}
                        className="pl-4 mt-2 space-y-2"
                      >
                        <li>
                          <NavLink
                            to="/bengkel"
                            className={({ isActive }) =>
                              isActive
                                ? "text-black block"
                                : "text-gray-500 block"
                            }
                          >
                            Bengkel
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/towing"
                            className={({ isActive }) =>
                              isActive
                                ? "text-black block"
                                : "text-gray-500 block"
                            }
                          >
                            Towing
                          </NavLink>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
