import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import background from "../../../../../assets/images/bg-white.png";

const Waiting = () => {
  useEffect(() => {
    const map = L.map("map").setView([-7.8259926, 113.8286264], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const userLocation = [lat, lng];
          L.marker(userLocation)
            .addTo(map)
            .bindPopup("Lokasi Anda")
            .openPopup();
          map.setView(userLocation, 15);
        },
        () => {
          console.warn("Tidak dapat mengambil lokasi pengguna.");
        }
      );
    }
  }, []);

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
        <motion.div
          className="grid grid-cols-1 gap-6 mb-2 md:grid-cols-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        ></motion.div>

        <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-4">
          <div className="col-span-1 bg-white rounded-xl shadow-md p-4 max-h-[250px] overflow-auto">
            <h2 className="mb-2 text-lg font-semibold">Konfirmasi Pesanan</h2>
            <ol className="pl-3 space-y-2 text-sm border-l-4 border-blue-600">
              <li className="font-semibold text-blue-600">1. Menunggu</li>
              <li className="text-gray-400">2. Diterima</li>
              <li className="text-gray-400">3. Dalam Perjalanan</li>
              <li className="text-gray-400">4. Selesai</li>
            </ol>
          </div>

          <motion.div
            className="col-span-1 space-y-4 md:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            <div className="p-4 text-blue-800 bg-blue-100 rounded-md">
              <p>
                <strong>Terimakasih atas pesanan anda!</strong> Pesanan anda
                akan dikirim kepada layanan terkait. Harap pantau.
              </p>
            </div>

            <div className="p-4 bg-white border rounded-md shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">Jali Go</h3>
                <span className="text-sm text-green-600">Buka 24 jam</span>
              </div>
              <p className="text-sm text-gray-700">
                Pesanan dengan nomor{" "}
                <span className="font-semibold text-red-600">
                  PS2321313131833
                </span>{" "}
                sudah dikirim kepada pihak bengkel <strong>Jali Go</strong>.
                Silahkan tunggu beberapa menit.
              </p>
            </div>

            <h4 className="pb-2 font-semibold border-b text-md">
              Detail Pesanan Anda
            </h4>
            <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
              <div>
                <label className="block text-gray-500">Nama Pemesan</label>
                <p className="text-gray-800">Etak</p>
              </div>
              <div>
                <label className="block text-gray-500">Nomor Pemesan</label>
                <p className="text-gray-800">08199929292922</p>
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-500">Alamat</label>
                <p className="text-gray-800">
                  Tegalsari Selatan, Bladen, Kec. Bondowoso, Kabupaten
                  Bondowoso, Jawa Timur 68214
                </p>
              </div>
              <div>
                <label className="block text-gray-500">Layanan Kendaraan</label>
                <p className="text-gray-800">Sepeda Motor</p>
              </div>
              <div>
                <label className="block text-gray-500">Metode Layanan</label>
                <p className="text-gray-800">Bengkel datang ke tempat</p>
              </div>
              <div>
                <label className="block text-gray-500">Waktu Pemesanan</label>
                <p className="text-gray-800">14 Mei 2024, 14:53</p>
              </div>
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-gray-500">
                Titik Lokasi Perjumpaan
              </label>
              <div id="map" className="w-full h-64 rounded-md" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Waiting;
