import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaHome,
  FaCog,
  FaSignOutAlt,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaClipboardList,
  FaHistory,
} from "react-icons/fa";
import logo from "../../../../assets/images/logo.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Sidebar({ isOpen, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();
  const MySwal = withReactContent(Swal);
  const [pemesananOpen, setPemesananOpen] = useState(false);

  const handleLogout = () => {
    MySwal.fire({
      title: <p>Apakah anda yakin ingin keluar?</p>,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya, keluar",
      cancelButtonText: "Tidak",
      buttonsStyling: false,
      customClass: {
        cancelButton:
          "bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded ml-2",
        confirmButton:
          "bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
        popup: "max-w-sm p-6 rounded-lg shadow-lg justify-between",
        title: "text-lg font-semibold",
        actions: "flex justify-between w-full",
      },
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        navigate("/mitra");
      }
    });
  };

  const activePage = location.pathname.split("/")[2];
  const activeSubPage = location.pathname.split("/")[3];
  const [jumlahPesananBaru, setJumlahPesananBaru] = useState(3); 

  useEffect(() => {
    if (isOpen) onClose();
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
        className={`fixed top-0 left-0 z-20 h-full bg-white shadow-md transform transition-transform duration-300 ease-in-out
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:w-64`}
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
                  <h2 className="font-semibold">Bengkel Go</h2>
                  <div className="mt-1 text-sm text-gray-600">
                    <div className="flex items-center justify-center gap-2">
                      <FaPhone className="text-blue-700" />
                      <span>071929193919</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-1">
                      <FaEnvelope className="text-blue-700" />
                      <span>etaksaja@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full gap-2 text-sm">
              <button
                onClick={() => navigate("/dashboard_mitra/utama")}
                className={`flex items-center gap-2 px-4 py-2 font-semibold rounded ${
                  activePage === "utama"
                    ? "bg-gray-100 text-biru"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <FaHome />
                Dashboard
              </button>

              <button
                onClick={() => setPemesananOpen(!pemesananOpen)}
                className="flex items-center justify-between px-4 py-2 font-semibold text-gray-700 rounded hover:bg-gray-100"
              >
                <div className="flex items-center gap-2">
                  <FaClipboardList />
                  Pemesanan
                </div>
                {pemesananOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {pemesananOpen && (
                <div className="pl-8 space-y-1 text-sm text-gray-600">
                  <div
                    onClick={() =>
                      navigate("/dashboard_mitra/pemesanan/menunggu")
                    }
                    className={`flex items-center justify-between cursor-pointer py-1 rounded px-2 ${
                      activeSubPage === "menunggu"
                        ? "bg-gray-200 text-biru font-medium"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <span>Menunggu Konfirmasi</span>
                    {jumlahPesananBaru > 0 && (
                      <span className="inline-block w-2 h-2 ml-2 bg-red-600 rounded-full"></span>
                    )}
                  </div>

                  <div
                    onClick={() =>
                      navigate("/dashboard_mitra/pemesanan/diterima")
                    }
                    className={`cursor-pointer py-1 rounded px-2 ${
                      activeSubPage === "diterima"
                        ? "bg-gray-200 text-biru font-medium"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    Diterima
                  </div>
                  <div
                    onClick={() =>
                      navigate("/dashboard_mitra/pemesanan/perjalanan")
                    }
                    className={`cursor-pointer py-1 rounded px-2 ${
                      activeSubPage === "perjalanan"
                        ? "bg-gray-200 text-biru font-medium"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    Dalam Perjalanan
                  </div>
                  <div
                    onClick={() =>
                      navigate("/dashboard_mitra/pemesanan/selesai")
                    }
                    className={`cursor-pointer py-1 rounded px-2 ${
                      activeSubPage === "selesai"
                        ? "bg-gray-200 text-biru font-medium"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    Selesai
                  </div>
                </div>
              )}

              <button
                onClick={() => navigate("/dashboard_mitra/riwayat")}
                className={`flex items-center gap-2 px-4 py-2 font-semibold rounded ${
                  activePage === "riwayat"
                    ? "bg-gray-100 text-biru"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <FaHistory />
                Riwayat Pemesanan
              </button>

              <button
                onClick={() => navigate("/dashboard_mitra/pengaturan")}
                className={`flex items-center gap-2 px-4 py-2 font-semibold rounded ${
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
