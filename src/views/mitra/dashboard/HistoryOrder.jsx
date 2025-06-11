import dayjs from "dayjs";
import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function HistoryOrder({ orders = [] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleDetail = (order) => {
    setSelectedService(order);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="p-4 overflow-x-auto bg-white shadow rounded-xl">
      <h2 className="mb-4 text-sm font-bold text-black md:text-base">
        Menunggu Konfirmasi
      </h2>

      <table className="w-full text-sm divide-gray-200">
        <thead className="bg-blue-50 rounded-t-xl">
          <tr>
            <th className="px-6 py-3 text-sm font-semibold text-left">
              No Pemesanan
            </th>
            <th className="px-6 py-3 text-sm font-semibold text-left">
              Nama Pemesan
            </th>
            <th className="px-6 py-3 text-sm font-semibold text-left">
              Layanan
            </th>
            <th className="px-6 py-3 text-sm font-semibold text-left">
              Status
            </th>
            <th className="px-6 py-3 text-sm font-semibold text-left">
              Tanggal
            </th>
            <th className="px-6 py-3 text-sm font-semibold text-center">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-800 divide-y divide-gray-100">
          {orders.map((order) => (
            <tr key={order.id} className="transition hover:bg-gray-50">
              <td className="px-6 py-4">{order.id}</td>
              <td className="px-6 py-4">{order.user.name}</td>
              <td className="px-6 py-4">{order.detail_service_name}</td>
              <td className="px-6 py-4">{order.status}</td>
              <td className="px-6 py-4">{dayjs(order.date).format("LL")}</td>
              <td className="px-6 py-4 text-center">
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => handleDetail(order)}
                    className="text-blue-600 transition hover:text-blue-700"
                    title="Detail"
                  >
                    <FaInfoCircle size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {orders.length === 0 && (
            <tr>
              <td
                colSpan="6"
                className="px-6 py-6 italic text-center text-gray-500"
              >
                Tidak ada pesanan menunggu konfirmasi.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {isModalOpen && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[95%] max-w-2xl max-h-[95vh] overflow-y-auto">
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                Detail Layanan
              </h2>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                <FontAwesomeIcon icon={faClose} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <label className="block text-gray-500">Nama Mitra</label>
                <p className="text-gray-800 dark:text-white">{selectedService.service?.bussiness_name}</p>
              </div>
              <div>
                <label className="block text-gray-500">Jenis Layanan</label>
                <p className="text-gray-800 dark:text-white">{selectedService.detail_service_name}</p>
              </div>
              <div>
                <label className="block text-gray-500">Alamat</label>
                <p className="text-gray-800 dark:text-white">{selectedService.address}</p>
              </div>
              <div>
                <label className="block text-gray-500">No. Telp</label>
                <p className="text-gray-800 dark:text-white">{selectedService.user?.phone}</p>
              </div>
              <div>
                <label className="block text-gray-500">Tanggal Pengajuan</label>
                <p className="text-gray-800 dark:text-white">{dayjs(selectedService.created_at).format("D MMM YYYY")}</p>
              </div>
              <div>
                <label className="block text-gray-500">Status</label>
                <p className="text-gray-800 dark:text-white">{selectedService.status}</p>
              </div>
            </div>

            {selectedService.latitude && selectedService.longitude && (
              <div className="mt-6">
                <label className="block text-gray-500 text-sm mb-1">Lokasi di Map</label>
                <MapContainer
                  center={[selectedService.latitude, selectedService.longitude]}
                  zoom={15}
                  scrollWheelZoom={false}
                  className="w-full h-64 rounded"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[selectedService.latitude, selectedService.longitude]}>
                    <Popup>
                      {selectedService.bussiness_name}<br />{selectedService.address}
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}
