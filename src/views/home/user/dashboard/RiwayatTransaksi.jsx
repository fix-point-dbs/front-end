import React from "react";
import { FaReceipt } from "react-icons/fa";

const dummyData = [
  {
    bengkel: "Bengkel Go",
    waktu: "10 Mei 2050, 19:58",
    layanan: "Sepeda Motor",
    lokasi:
      "Tegaljati Selatan, Badean, Kec. Bondowoso, Kabupaten Bondowoso, Jawa Timur 68214",
    deskripsi:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    status: "Sedang berlangsung",
  },
  {
    bengkel: "Bengkel Go",
    waktu: "10 Mei 2050, 19:58",
    layanan: "Sepeda Motor",
    lokasi:
      "Tegaljati Selatan, Badean, Kec. Bondowoso, Kabupaten Bondowoso, Jawa Timur 68214",
    deskripsi:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    status: "Selesai",
  },
  {
    bengkel: "Bengkel Go",
    waktu: "10 Mei 2050, 19:58",
    layanan: "Sepeda Motor",
    lokasi:
      "Tegaljati Selatan, Badean, Kec. Bondowoso, Kabupaten Bondowoso, Jawa Timur 68214",
    deskripsi:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    status: "Ditolak",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Selesai":
      return "bg-green-500";
    case "Sedang berlangsung":
      return "bg-yellow-500";
    case "Ditolak":
      return "bg-red-500";
    default:
      return "bg-gray-400";
  }
};

export default function RiwayatTransaksi() {
  return (
    <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-6">
      <div className="flex items-center justify-center gap-2 p-4 mb-6 bg-gray-100 border rounded-xl">
        <FaReceipt className="text-2xl text-black" />
        <h2 className="text-base font-bold text-black">
          Riwayat Transaksi Anda
        </h2>
      </div>

      {dummyData.map((item, idx) => (
        <div
          key={idx}
          className="relative p-4 mb-6 bg-white border shadow-sm sm:p-6 rounded-xl sm:text-base"
        >
          <div className="flex flex-col pb-2 mb-4 border-b sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-bold text-black text-medium">{item.bengkel}</h3>
            <p
              className={`px-3 py-1 mt-2 text-sm font-semibold text-white rounded-full inline-block w-fit sm:mt-0 ${getStatusColor(
                item.status
              )}`}
            >
              {item.status}
            </p>
          </div>

          <div className="grid grid-cols-1 text-gray-800 md:grid-cols-2 gap-y-4 gap-x-8">
            <div className="space-y-2">
              <div>
                <span className="block text-sm font-semibold text-black">
                  Waktu Pemesanan
                </span>
                <p className="text-sm">{item.waktu}</p>
              </div>
              <div>
                <span className="block text-sm font-semibold text-black">
                  Layanan Kendaraan
                </span>
                <p className="text-sm">{item.layanan}</p>
              </div>
              <div>
                <span className="block text-sm font-semibold text-black">
                  Lokasi
                </span>
                <p className="text-sm">{item.lokasi}</p>
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <span className="block text-sm font-semibold text-black">
                  Deskripsi
                </span>
                <p className="text-sm">{item.deskripsi}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
