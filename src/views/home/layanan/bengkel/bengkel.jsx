import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faClock,
  faCalendarAlt,
  faRuler,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import background from "../../../../assets/images/bg-white.png";
import dummyImage from "../../../../assets/images/orang.png";

const dataBengkel = [
  {
    id: 1,
    nama: "Jali Go",
    kategori: "Bengkel",
    rating: 4.5,
    jenis: "Bengkel & Towing",
    waktu: "5 mnt",
    harga: "Rp50.000 – 100.000",
    alamat:
      "Tegalbatu Selatan, Badean, Kec.Bondowoso, Kabupaten Bondowoso, Jawa Timur 68214",
    jarak: 1.2,
    buka: "Buka 24 jam",
    telepon: "0816-0789-2456",
    gambar: dummyImage,
  },
  {
    id: 2,
    nama: "Bengkel Sukses",
    kategori: "Bengkel",
    rating: 4.2,
    jenis: "Bengkel",
    waktu: "10 mnt",
    harga: "Rp40.000 – 80.000",
    alamat: "Jl. Sudirman No.5, Kota Bondowoso, Jawa Timur",
    jarak: 2.1,
    buka: "07.00 - 22.00",
    telepon: "0816-4321-8765",
    gambar: dummyImage,
  },
  {
    id: 3,
    nama: "Bengkel Sukses",
    kategori: "Bengkel",
    rating: 4.2,
    jenis: "Bengkel",
    waktu: "10 mnt",
    harga: "Rp40.000 – 80.000",
    alamat: "Jl. Sudirman No.5, Kota Bondowoso, Jawa Timur",
    jarak: 3.1,
    buka: "07.00 - 22.00",
    telepon: "0816-4321-8765",
    gambar: dummyImage,
  },
  {
    id: 4,
    nama: "Bengkel Sukses",
    kategori: "Bengkel",
    rating: 4.2,
    jenis: "Bengkel",
    waktu: "10 mnt",
    harga: "Rp40.000 – 80.000",
    alamat: "Jl. Sudirman No.5, Kota Bondowoso, Jawa Timur",
    jarak: 5.1,
    buka: "07.00 - 22.00",
    telepon: "0816-4321-8765",
    gambar: dummyImage,
  },
];

export default function Bengkel() {
  const [filterJarak, setFilterJarak] = useState(null);
  const filterOptions = [2, 3, 5];

  const filteredData = filterJarak
    ? dataBengkel.filter((b) => b.jarak <= filterJarak)
    : dataBengkel;

  return (
    <section className="relative pb-10 overflow-hidden">
      <img
        src={background}
        alt="Hero background"
        className="absolute inset-0 z-0 object-cover w-full h-[300px] sm:h-[300px] lg:h-[300px]"
      />
      <div className="relative z-10 px-4 mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 flex flex-col items-center justify-center h-[300px] text-center px-4"
          >
            <h2 className="pt-20 mb-2 text-2xl font-bold text-center text-black sm:pt-20">
              Daftar Bengkel
            </h2>
            <p className="mb-8 text-center text-black-600">
              Pilih bengkel terdekat dari lokasi Anda
            </p>
          </motion.div>
          <div className="flex justify-center gap-3 mt-4">
            <button
              onClick={() => setFilterJarak(null)}
              className={`px-4 py-1.5 rounded-md text-sm ${
                filterJarak === null
                  ? "bg-oranye text-white font-bold"
                  : "border border-gray-300 text-gray-500 font-medium"
              }`}
            >
              Semua
            </button>
            {filterOptions.map((jarak) => (
              <button
                key={jarak}
                onClick={() => setFilterJarak(jarak)}
                className={`px-4 py-1.5 rounded-md text-sm ${
                  filterJarak === jarak
                    ? "bg-oranye text-white font-bold"
                    : "border border-gray-300 text-gray-500 font-medium"
                }`}
              >
                ≤ {jarak} km
              </button>
            ))}
          </div>
        </div>

        <div className="w-[90%] max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredData.length === 0 ? (
              <p className="text-sm italic text-center text-gray-600 col-span-full">
                Tidak ada bengkel tersedia untuk jarak tersebut.
              </p>
            ) : (
              filteredData.map((item) => (
                <motion.div
                  key={item.id}
                  className="overflow-hidden bg-white shadow rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={item.gambar}
                    alt={item.nama}
                    className="block object-cover w-full h-40 max-w-full rounded-t-xl"
                  />
                  <div className="p-4 min-h-[350px] flex flex-col justify-between">
                    <h2 className="mb-0 text-lg font-bold">{item.nama}</h2>
                    <p className="mt-0 text-sm text-gray-500">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="mr-2 text-yellow-400"
                      />
                      {item.rating} / 5 • {item.jenis} • {item.waktu}
                    </p>
                    <p className="mt-1 font-medium text-green-500">
                      {item.harga}
                    </p>
                    <div className="flex justify-between mt-4">
                      <a href="/pemesanan">
                        {" "}
                        <button className="px-3 py-1 text-sm font-semibold text-white bg-red-500 rounded">
                          <FontAwesomeIcon
                            icon={faCalendarAlt}
                            className="mr-2 text-white"
                          />
                          Booking
                        </button>
                      </a>
                      <a href="/bengkel/detail">
                        <button className="px-3 py-1 text-sm font-semibold border rounded text-biru border-biru">
                          Lihat Detail
                        </button>
                      </a>
                    </div>
                    <h3 className="mt-4 text-sm font-semibold text-center text-biru">
                      Ringkasan
                    </h3>
                    <hr className="mt-2 mb-2 border-gray-300" />
                    <ul className="mb-2 space-y-3 text-sm text-black-700">
                      <li className="flex items-center space-x-4">
                        <FontAwesomeIcon
                          icon={faMapMarkerAlt}
                          className="text-biru"
                        />
                        <span>{item.alamat}</span>
                      </li>
                      <li className="flex items-center space-x-4">
                        <FontAwesomeIcon
                          icon={faClock}
                          className="text-green-600"
                        />
                        <span className="font-medium text-green-600">
                          {item.buka}
                        </span>
                      </li>
                      <li className="flex items-center space-x-4">
                        <FontAwesomeIcon icon={faPhone} className="text-biru" />
                        <span>{item.telepon}</span>
                      </li>
                      <li className="flex items-center space-x-4">
                        <FontAwesomeIcon icon={faRuler} className="text-biru" />
                        <span>{item.jarak} km</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
