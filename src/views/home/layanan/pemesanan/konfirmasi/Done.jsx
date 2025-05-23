import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import background from "../../../../../assets/images/bg-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faComments } from "@fortawesome/free-solid-svg-icons";

const Done = () => {
  return (
    <section className="w-[90%] max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-[60px] overflow-hidden bg-cover bg-center bg-no-repeat mb-10">
      <img
        src={background}
        alt="Hero background"
        className="absolute inset-0 z-0 object-cover w-full h-[300px] sm:h-[300px] lg:h-[300px]"
      />
      <div className="relative z-10 ">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="pt-20 mb-2 text-2xl font-bold text-center text-black sm:pt-20">
            Konfirmasi Pemesanan
          </h2>
          <p className="mb-8 text-center text-black-600">
            Silahkan pantau dashboard untuk melihat pesanan anda!
          </p>
        </motion.div>

        <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto mb-10 md:grid-cols-4">
          <div className="col-span-1 space-y-4">
            <div className="p-4 bg-white shadow-md rounded-xl h-fit">
              <h2 className="mb-6 text-base font-bold text-gray-800">
                Konfirmasi Pesanan
              </h2>
              <div className="relative ml-6 border-l-2 border-gray-200">
                <div className="relative flex items-center mb-10 space-x-4">
                  <div className="absolute flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-blue-700 rounded-full -left-6">
                    1
                  </div>
                  <span className="text-sm font-semibold text-blue-700">
                    Menunggu
                  </span>
                </div>

                <div className="relative flex items-center mb-10 space-x-4">
                  <div className="absolute flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-blue-700 rounded-full -left-6">
                    2
                  </div>
                  <span className="text-sm font-semibold text-blue-700">
                    Diterima
                  </span>
                </div>

                <div className="relative flex items-center mb-10 space-x-4">
                  <div className="absolute flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-blue-700 rounded-full -left-6">
                    2
                  </div>
                  <span className="text-sm font-semibold text-blue-700">
                    Dalam Perjalanan
                  </span>
                </div>

                <div className="relative flex items-center mb-10 space-x-4">
                  <div className="absolute -left-6">
                    <span className="absolute inline-flex w-8 h-8 bg-blue-400 rounded-full opacity-75 animate-ping"></span>
                    <span className="relative flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-blue-700 rounded-full">
                      4
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-blue-700">
                    Selesai
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 space-y-4 md:col-span-3">
            <div className="p-4 text-white rounded-md shadow-sm bg-oranye">
              <p>
                <FontAwesomeIcon
                  icon={faBullhorn}
                  className="mr-2 text-white"
                />
                <strong>Terimakasih!</strong> Pesanan anda dengan nomor {""}
                <span className="font-semibold text-black">
                  PS2321313131833
                </span>{" "}
                telah <strong>Selesai</strong> Harap beri ulasan anda yah!.
              </p>
            </div>

            <div className="p-4 space-y-4 border rounded-md shadow-sm bg-gray-50">
              <h4 className="pb-2 font-semibold border-b text-md">
                Bagaimana pelayanan yang dilakukan?
              </h4>

              <div className="space-y-3">
                <label className="block text-sm font-bold text-gray-700">
                  Penilaian:
                </label>
                <select className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
                  <option value="">Pilih rating</option>
                  <option value="5">⭐️⭐️⭐️⭐️⭐️ (Sangat Baik)</option>
                  <option value="4">⭐️⭐️⭐️⭐️ (Baik)</option>
                  <option value="3">⭐️⭐️⭐️ (Cukup)</option>
                  <option value="2">⭐️⭐️ (Kurang)</option>
                  <option value="1">⭐️ (Buruk)</option>
                </select>

                <label className="block text-sm font-bold text-gray-700">
                  Ulasan:
                </label>
                <textarea
                  rows="4"
                  placeholder="Tulis pengalaman anda..."
                  className="w-full p-2 border rounded-md resize-none focus:outline-none focus:ring focus:border-blue-300"
                ></textarea>

                <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 text-right">
          <button className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-600">
            Selesai
          </button>
        </div>
      </div>
    </section>
  );
};

export default Done;
