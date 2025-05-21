import React, { useEffect } from "react";
import background from "../../../../assets/images/bg-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faStar,
  faPhone,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Detail = () => {
  useEffect(() => {
    const map = L.map("map").setView([-6.914744, 107.60981], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    L.marker([-6.914744, 107.60981])
      .addTo(map)
      .bindPopup("Bengkel Andalan Motor")
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <section className="relative pb-10 overflow-hidden">
      <img
        src={background}
        alt="Hero background"
        className="absolute inset-0 object-cover w-full h-[300px] sm:h-[300px] lg:h-[300px] z-0"
      />
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex flex-col items-center justify-center h-[300px] text-center px-4"
      >
        <h2 className="pt-20 mb-2 text-2xl font-bold text-center text-black sm:pt-20">
          Detail Layanan
        </h2>
        <p className="mb-8 text-center text-black-600">
          Berikut merupakan informasi dari layanan terkait!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-biru drop-shadow-lg"
      >
        <div className="w-[90%] max-w-7xl mx-auto p-5 text-base text-white">
          Home / <span className="text-base text-white">Detail Layanan</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-[90%] max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-[20px] overflow-hidden bg-cover bg-center bg-no-repeat mb-10"
      >
        <div className="mb-6">
          <h1 className="mb-2 text-2xl font-bold text-black sm:text-3xl">
            Bengkel Andalan Motor
          </h1>
          <div className="flex flex-wrap gap-2 text-sm text-black sm:gap-4 sm:text-base">
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faTools} className="text-yellow-500" />
              <span className="whitespace-nowrap">Bengkel</span>
            </span>
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              <span className="whitespace-nowrap">4.7/5 (230 Ulasan)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <section>
              <h2 className="mb-2 text-lg font-semibold text-black sm:text-xl md:text-2xl">
                Deskripsi Layanan
              </h2>
              <p className="text-sm text-gray-800 sm:text-base md:text-lg">
                Bengkel Andalan Motor adalah solusi tepat untuk perbaikan dan
                perawatan kendaraan Anda. Kami melayani servis rutin, perbaikan
                mesin, ganti oli, hingga pengecekan menyeluruh. Dikerjakan oleh
                teknisi profesional dan berpengalaman.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-black sm:text-xl md:text-2xl">
                Keahlian
              </h2>
              <ul className="ml-5 space-y-1 text-sm text-gray-800 list-disc sm:text-base md:text-lg">
                <li>Servis Mesin</li>
                <li>Ganti Oli & Tune Up</li>
                <li>Perbaikan Kelistrikan</li>
                <li>Servis Rutin Motor Matic & Manual</li>
              </ul>
            </section>

            <h2 className="mb-4 text-lg font-semibold text-black sm:text-xl md:text-2xl">
              Lokasi
            </h2>
            <div
              id="map"
              className="w-full rounded-lg h-80"
              style={{ zIndex: 0 }}
            ></div>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-black">
                Ulasan Pengguna
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-100 rounded">
                  <p className="text-sm text-black">
                    “Pelayanannya cepat dan ramah. Harga juga transparan. Sangat
                    direkomendasikan!”
                  </p>
                  <span className="text-sm text-yellow-500">- Rina A.</span>
                </div>
                <div className="p-4 bg-gray-100 rounded">
                  <p className="text-sm text-black">
                    “Sudah langganan dari dulu. Montirnya profesional dan
                    jujur.”
                  </p>
                  <span className="text-sm text-yellow-500">- Budi S.</span>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-4">
            <div className="p-6 text-black bg-yellow-400 shadow-lg rounded-xl">
              <h3 className="mb-2 text-xl font-bold">
                Butuh Bantuan Sekarang?
              </h3>
              <p className="mb-4 text-sm">
                Hubungi kami untuk booking atau konsultasi langsung dengan
                teknisi.
              </p>
              <a
                href={`/pemesanan`}
                className="flex items-center justify-center w-full px-4 py-2 mb-2 text-white transition bg-red-600 rounded hover:bg-red-700"
              >
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                Pesan Sekarang
              </a>
            </div>

            <div className="p-4 text-sm text-black bg-gray-200 rounded-lg">
              <p>
                <strong>Alamat:</strong> Jl. Mekar Jaya No. 10, Bandung
              </p>
              <p>
                <strong>Jam Buka:</strong> 08:00 - 17:00 WIB
              </p>
              <p>
                <strong>No. Telepon:</strong> +62 812-3456-789
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Detail;
