import React, { useState } from "react";
import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function MenungguKonfirmasi() {
  const [dataPesanan, setDataPesanan] = useState([
    {
      id: 1,
      noPemesanan: "PSN1256",
      namaPemesan: "Agus Salim",
      tanggal: "2025-05-30",
      alamat: "Jl. Merdeka No. 12, Jakarta",
      layanan: "Bengkel Datang Ke Tempat",
      catatan: "Mohon datang pagi",
    },
    {
      id: 2,
      namaPemesan: "Siti Aminah",
      tanggal: "2025-05-31",
      alamat: "Jl. Kenanga No. 45, Bandung",
      layanan: "Service Kulkas",
      catatan: "-",
    },
  ]);

  const handleTerima = (id) => {
    const pesanan = dataPesanan.find((p) => p.id === id);
    MySwal.fire({
      title: "Terima Pesanan?",
      text: `Terima pesanan dari ${pesanan.namaPemesan}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Terima",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        setDataPesanan(dataPesanan.filter((p) => p.id !== id));
        MySwal.fire("Diterima!", "Pesanan telah diterima.", "success");
      }
    });
  };

  const handleTolak = (id) => {
    const pesanan = dataPesanan.find((p) => p.id === id);
    MySwal.fire({
      title: "Tolak Pesanan?",
      text: `Tolak pesanan dari ${pesanan.namaPemesan}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Tolak",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        setDataPesanan(dataPesanan.filter((p) => p.id !== id));
        MySwal.fire("Ditolak!", "Pesanan telah ditolak.", "info");
      }
    });
  };

  const handleDetail = (pesanan) => {
    MySwal.fire({
      title: "Detail Pesanan",
      html: `
        <div style="text-align: left;">
          <p><strong>Nama:</strong> ${pesanan.id}</p>
          <p><strong>Tanggal:</strong> ${pesanan.tanggal}</p>
          <p><strong>Alamat:</strong> ${pesanan.alamat}</p>
          <p><strong>Layanan:</strong> ${pesanan.layanan}</p>
          <p><strong>Catatan:</strong> ${pesanan.catatan}</p>
        </div>
      `,
      confirmButtonText: "Tutup",
    });
  };

  return (
    <div className="p-4 overflow-x-auto bg-white shadow rounded-xl">
      <h2 className="mb-4 text-sm font-bold text-black md:text-base">
        Menunggu Konfirmasi
      </h2>

      <table className="w-full text-sm divide-gray-200">
        <thead className="bg-blue-50 rounded-t-xl">
          <tr>
            <th className="px-6 py-3 text-sm font-semibold text-left ">Id</th>
            <th className="px-6 py-3 text-sm font-semibold text-left">
              No Pemesanan
            </th>
            <th className="px-6 py-3 text-sm font-semibold text-left">
              Nama Pemesan
            </th>
            <th className="px-6 py-3 text-sm font-semibold text-left">
              Layanan
            </th>
            <th className="px-6 py-3 text-sm font-semibold text-center">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-800 divide-y divide-gray-100">
          {dataPesanan.map((pesanan) => (
            <tr key={pesanan.id} className="transition hover:bg-gray-50">
              <td className="px-6 py-4">{pesanan.namaPemesan}</td>
              <td className="px-6 py-4">{pesanan.tanggal}</td>
              <td className="px-6 py-4">{pesanan.alamat}</td>
              <td className="px-6 py-4">{pesanan.layanan}</td>
              <td className="px-6 py-4 text-center">
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => handleTerima(pesanan.id)}
                    className="text-green-600 transition hover:text-green-700"
                    title="Terima"
                  >
                    <FaCheck size={18} />
                  </button>
                  <button
                    onClick={() => handleTolak(pesanan.id)}
                    className="text-red-600 transition hover:text-red-700"
                    title="Tolak"
                  >
                    <FaTimes size={18} />
                  </button>
                  <button
                    onClick={() => handleDetail(pesanan)}
                    className="text-blue-600 transition hover:text-blue-700"
                    title="Detail"
                  >
                    <FaInfoCircle size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {dataPesanan.length === 0 && (
            <tr>
              <td
                colSpan="5"
                className="px-6 py-6 italic text-center text-gray-500"
              >
                Tidak ada pesanan menunggu konfirmasi.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
