import React, { useState } from "react";
import background from "../../../../assets/images/bg-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMapMarkerAlt,
  faTruck,
  faPhone,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const dataTowing = [
  {
    nama: "Towing Jali Go",
    jam: "24 Jam",
    lokasi: "0.5 km dari lokasi Anda",
    spesialis: "Towing Motor & Mobil",
    jarak: 0.5,
    gambar:
      "https://tse4.mm.bing.net/th?id=OIP.lJIUWJXOtnftdmoabIZNGgHaEe&pid=Api&P=0&h=180",
  },
  {
    nama: "AutoFix Towing",
    jam: "08.00 - 21.00",
    lokasi: "1.2 km dari lokasi Anda",
    spesialis: "Towing Mobil",
    jarak: 1.2,
    gambar:
      "https://tse4.mm.bing.net/th?id=OIP.lJIUWJXOtnftdmoabIZNGgHaEe&pid=Api&P=0&h=180",
  },
  {
    nama: "Towing Sinar",
    jam: "07.00 - 22.00",
    lokasi: "2.5 km dari lokasi Anda",
    spesialis: "Evakuasi Kendaraan Berat",
    jarak: 2.5,
    gambar:
      "https://tse4.mm.bing.net/th?id=OIP.lJIUWJXOtnftdmoabIZNGgHaEe&pid=Api&P=0&h=180",
  },
];

export default function Towing() {
  const [filterJarak, setFilterJarak] = useState(null);
  const filterOptions = [1, 2, 3];

  const towingTerdekat = filterJarak
    ? dataTowing.filter((t) => t.jarak <= filterJarak)
    : dataTowing;

  return (
    <section className="relative pt-20 sm:pt-[100px] pb-24 overflow-hidden">
      <img
        src={background}
        alt="Hero background"
        className="absolute inset-0 z-0 object-cover w-full h-[200px] sm:h-[300px] lg:h-[400px]"
      />

      <div className="relative z-10 px-4 mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-biru">Towing Terdekat</h2>
          <p className="mt-2 text-black-600">
            Temukan layanan towing yang Anda butuhkan
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
          {towingTerdekat.length > 0 ? (
            towingTerdekat.map((towing, index) => (
              <div
                key={index}
                className="overflow-hidden transition duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl"
              >
                <img
                  src={towing.gambar}
                  alt={towing.nama}
                  className="object-cover w-full h-48"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {towing.nama}
                  </h3>

                  <p className="flex items-center mt-2 text-sm text-gray-600">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="mr-2 text-biru"
                    />
                    {towing.jam}
                  </p>

                  <p className="flex items-center text-sm text-gray-600">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="mr-2 text-biru"
                    />
                    {towing.lokasi}
                  </p>

                  <p className="flex items-center text-sm text-gray-600">
                    <FontAwesomeIcon
                      icon={faTruck}
                      className="mr-2 text-biru"
                    />
                    {towing.spesialis}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <button className="px-3 py-1 text-sm font-semibold text-white transition bg-red-500 rounded hover:bg-red-600">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="mr-2 text-white"
                      />
                      Pesan
                    </button>
                    <button className="px-3 py-1 text-sm font-semibold transition border rounded text-biru border-biru hover:bg-biru hover:text-white">
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="mr-2 text-biru hover:text-white"
                      />
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              Tidak ada layanan towing dalam jarak tersebut.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
