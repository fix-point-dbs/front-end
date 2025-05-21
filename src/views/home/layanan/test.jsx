import React from "react";

const OnTheWay = () => {
  return (
    <div className="flex flex-col gap-4 p-6 lg:flex-row">
      {/* Sidebar kiri - Konfirmasi Pesanan */}
      <div className="w-full p-4 bg-white shadow-md lg:w-1/4 rounded-xl">
        <h2 className="mb-4 text-lg font-semibold">Konfirmasi Pesanan</h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <div className="flex items-center justify-center w-6 h-6 text-sm font-bold text-white bg-blue-500 rounded-full">
              1
            </div>
            <span className="ml-2 text-gray-700">Menunggu</span>
          </li>
          <li className="flex items-center">
            <div className="flex items-center justify-center w-6 h-6 text-sm font-bold text-white bg-blue-500 rounded-full">
              2
            </div>
            <span className="ml-2 text-gray-700">Diterima</span>
          </li>
          <li className="flex items-center">
            <div className="flex items-center justify-center w-6 h-6 text-sm font-bold text-white bg-blue-500 rounded-full">
              3
            </div>
            <span className="ml-2 font-semibold text-blue-600">
              Dalam Perjalanan
            </span>
          </li>
          <li className="flex items-center opacity-40">
            <div className="flex items-center justify-center w-6 h-6 text-sm font-bold text-white bg-gray-300 rounded-full">
              4
            </div>
            <span className="ml-2 text-gray-500">Selesai</span>
          </li>
        </ul>
      </div>

      {/* Konten utama */}
      <div className="w-full p-6 bg-white shadow-md lg:w-3/4 rounded-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-blue-700">🔧 Jali Go</h3>
            <p className="text-sm text-green-600">Buka 24 jam</p>
          </div>
          <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            💬 Chat
          </button>
        </div>

        {/* Info pesanan */}
        <div className="p-4 mb-6 bg-gray-100 rounded-md shadow-sm">
          <p className="text-gray-700">
            Pesanan dengan nomor{" "}
            <span className="font-semibold text-red-600">PRS212131311383</span>{" "}
            sudah diterima oleh pihak bengkel{" "}
            <span className="font-semibold text-blue-700">Jali Go</span>, montir
            akan segera datang ke tempat anda.
          </p>
        </div>

        {/* Ilustrasi motor */}
        <div className="flex flex-col items-center">
          <img
            src="https://media.giphy.com/media/YTbZzCkRQCEJa/giphy.gif" // Bisa diganti sesuai keinginan
            alt="Montir OTW"
            className="w-48 h-auto mb-4"
          />
          <p className="text-center text-gray-700">
            Montir Sedang menuju lokasi anda dengan Nomor Polisi
          </p>
          <p className="text-lg font-bold text-green-600">AG 1284 GT</p>
        </div>

        {/* Tombol Selesai */}
        <div className="flex justify-end mt-6">
          <button className="px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600">
            Selesai
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnTheWay;
