import React, { useState } from "react";
import { motion } from "framer-motion";
import background from "../../../assets/images/bg-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const dataBengkel = [
  {
    nama: "Jali Go",
    jam: "Buka 24 jam",
    lokasi: "0.5 km dari lokasi Anda",
    spesialis: "Ban & Service",
    jarak: 0.5,
    gambar:
      "https://2.bp.blogspot.com/-uXQRlqWL5XU/UoZleEZrhxI/AAAAAAAAAgk/OA8E42eH6rg/s1600/DDOC-280912-0001.jpg",
  },
  {
    nama: "AutoFix",
    jam: "08.00 - 21.00",
    lokasi: "1.2 km dari lokasi Anda",
    spesialis: "Servis ringan & besar",
    jarak: 1.2,
    gambar:
      "https://2.bp.blogspot.com/-uXQRlqWL5XU/UoZleEZrhxI/AAAAAAAAAgk/OA8E42eH6rg/s1600/DDOC-280912-0001.jpg",
  },
  {
    nama: "Bengkel Sinar",
    jam: "07.00 - 22.00",
    lokasi: "2.5 km dari lokasi Anda",
    spesialis: "Service Mesin",
    jarak: 2.5,
    gambar:
      "https://2.bp.blogspot.com/-uXQRlqWL5XU/UoZleEZrhxI/AAAAAAAAAgk/OA8E42eH6rg/s1600/DDOC-280912-0001.jpg",
  },
  {
    nama: "Express Motor",
    jam: "09.00 - 17.00",
    lokasi: "3.0 km dari lokasi Anda",
    spesialis: "Ganti Oli & Tune-Up",
    jarak: 3.0,
    gambar:
      "https://2.bp.blogspot.com/-uXQRlqWL5XU/UoZleEZrhxI/AAAAAAAAAgk/OA8E42eH6rg/s1600/DDOC-280912-0001.jpg",
  },
];

export default function Bengkel() {
  const [filterJarak, setFilterJarak] = useState(null);
  const filterOptions = [1, 2, 3];

  const bengkelTerdekat = filterJarak
    ? dataBengkel.filter((b) => b.jarak <= filterJarak)
    : dataBengkel;

  return (
    <section className="relative pt-32 sm:pt-[100px] pb-24 overflow-hidden">
      <img
        src={background}
        alt="Hero background"
        className="absolute inset-0 z-0 object-cover w-full h-[200px] sm:h-[300px] lg:h-[400px]"
      />

      <div className="relative z-10 px-4 mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-biru">Bengkel Terdekat</h2>
          <p className="mt-2 text-black-600">
            Temukan bengkel yang Anda cari di sini
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <span className="font-medium text-gray-700">Filter Jarak:</span>
          {filterOptions.map((km) => (
            <button
              key={km}
              onClick={() => setFilterJarak(km)}
              className={`px-4 py-2 rounded-full border transition ${
                filterJarak === km
                  ? "bg-biru text-white border-biru"
                  : "text-biru border-biru hover:bg-biru hover:text-white"
              }`}
            >
              ≤ {km} km
            </button>
          ))}
          {filterJarak && (
            <button
              onClick={() => setFilterJarak(null)}
              className="ml-2 text-sm text-gray-500 underline"
            >
              Hapus Filter
            </button>
          )}
        </div>

        <div className="w-[90%] max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bengkelTerdekat.length > 0 ? (
            bengkelTerdekat.map((bengkel, index) => (
              <motion.div
                key={index}
                className="overflow-hidden transition duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                <img
                  src={bengkel.gambar}
                  alt={bengkel.nama}
                  className="object-cover w-full h-48"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {bengkel.nama}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">🕒 {bengkel.jam}</p>
                  <p className="text-sm text-gray-600">📍 {bengkel.lokasi}</p>
                  <p className="text-sm text-gray-600">
                    🔧 Spesialis: {bengkel.spesialis}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <button className="px-3 py-1 text-sm font-semibold text-white transition bg-red-500 rounded hover:bg-red-600">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="mr-2 text-white"
                      />
                      Pesan
                    </button>
                    <a
                      href={`/bengkel/detail`}
                      className="px-3 py-1 text-sm font-semibold transition border rounded text-biru border-biru hover:bg-biru hover:text-white"
                    >
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="mr-2 text-biru"
                      />
                      Detail
                    </a>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              Tidak ada bengkel dalam jarak tersebut.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
