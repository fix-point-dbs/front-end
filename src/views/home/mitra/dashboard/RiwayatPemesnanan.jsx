import React, { useState } from "react";

export default function RiwayatPemesanan() {
  const [riwayatPesanan] = useState([
    {
      id: 1,
      namaPemesan: "Agus Salim",
      tanggal: "2025-05-10",
      alamat: "Jl. Merdeka No. 12, Jakarta",
      layanan: "Cuci AC",
      status: "Selesai",
    },
    {
      id: 2,
      namaPemesan: "Siti Aminah",
      tanggal: "2025-05-15",
      alamat: "Jl. Kenanga No. 45, Bandung",
      layanan: "Service Kulkas",
      status: "Selesai",
    },
  ]);

  return (
    <div className="p-4 overflow-x-auto bg-white shadow rounded-xl">
      <h2 className="mb-4 text-sm font-bold text-black md:text-base">
        Riwayat Pemesanan
      </h2>
      <table className="w-full text-sm divide-gray-200">
        <thead className="bg-blue-50 rounded-t-xl">
          <tr>
            <th className="px-6 py-3 text-sm font-semibold text-left">Nama</th>
            <th className="px-6 py-3 text-sm font-semibold text-left">
              Tanggal
            </th>
            <th className="px-6 py-3 text-sm font-semibold text-left">
              Alamat
            </th>
            <th className="px-6 py-3 text-sm font-semibold text-left">
              Layanan
            </th>
            <th className="px-6 py-3 text-sm font-semibold text-center">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-800 divide-y divide-gray-100">
          {riwayatPesanan.map((pesanan) => (
            <tr key={pesanan.id} className="transition hover:bg-gray-50">
              <td className="px-6 py-4">{pesanan.namaPemesan}</td>
              <td className="px-6 py-4">{pesanan.tanggal}</td>
              <td className="px-6 py-4">{pesanan.alamat}</td>
              <td className="px-6 py-4">{pesanan.layanan}</td>
              <td className="px-6 py-4 text-center">
                <span className="inline-block px-3 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                  {pesanan.status}
                </span>
              </td>
            </tr>
          ))}

          {riwayatPesanan.length === 0 && (
            <tr>
              <td
                colSpan="5"
                className="px-6 py-6 italic text-center text-gray-500"
              >
                Belum ada riwayat pemesanan.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
