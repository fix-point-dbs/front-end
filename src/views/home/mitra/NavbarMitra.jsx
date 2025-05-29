import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

export default function NavbarMitra() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  const sections = ["beranda", "partner", "tentang", "pertanyaan"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120; 

      for (let id of sections) {
        const el = document.getElementById(id);
        if (
          el &&
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const getLinkClass = (section) =>
    `hover:text-black ${
      activeSection === section ? "text-black font-semibold" : "text-gray-500"
    }`;

  const handleSectionClick = (e, section) => {
    e.preventDefault();
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        setActiveSection(section);
      }, 400);

      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        <div className="flex items-center gap-10">
          <img src={logo} alt="Fixpoint Logo" className="h-10" />

          <ul className="hidden space-x-8 font-medium md:flex">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(e) => handleSectionClick(e, section)}
                  className={getLinkClass(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
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
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-0 left-0 right-0 bg-putih rounded-t-xl shadow-lg z-50 px-6 pt-6 pb-8 max-h-[80vh] overflow-auto"
            >
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="absolute top-4 right-4 text-biru"
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

              <ul className="mt-6 space-y-4">
                {sections.map((section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      onClick={(e) => handleSectionClick(e, section)}
                      className={getLinkClass(section)}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                ))}
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
