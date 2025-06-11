import React, { useState } from "react";
import dayjs from "dayjs";
import { faCheck, faClose, faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Slider from "react-slick";
export default function PengajuanMitra({ services, isLoading , handleAccept, handleReject }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleAction = (id, action) => {
    if (action === "accept") {
      handleAccept(id);
    } else if (action === "reject") {
      handleReject(id);
    }
  };

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
    {isLoading ? (
      <div className="flex justify-center items-center py-10">
        <svg
          className="animate-spin h-8 w-8 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
        <span className="ml-2 text-gray-600 dark:text-gray-300">Memuat data...</span>
      </div>
    ) : (
      <section className="w-full">
      <div className="relative w-full max-h-[80vh] overflow-y-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
        <tr>
          <th className="px-6 py-3">Nama Mitra</th>
          <th className="px-6 py-3">Jenis Layanan</th>
          <th className="px-6 py-3">Alamat</th>
          <th className="px-6 py-3">No. Telp</th>
          <th className="px-6 py-3">Tanggal pengajuan</th>
          <th className="px-6 py-3">Status</th>
          <th className="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        {services?.map((item) => (
          <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {item.bussiness_name}
            </td>
            <td className="px-6 py-4">{item.type}</td>
            <td className="px-6 py-4">{item.address}</td>
            <td className="px-6 py-4">{item.alternative_phone}</td>
            <td className="px-6 py-4">{dayjs(item.created_at).format("D MMM YYYY")}</td>
            <td className="px-6 py-4">{item.status}</td>
            <td className="px-6 py-4 flex gap-2">
              <button onClick={() => handleAction(item.id, "accept")} className="text-green-500 w-10 h-10 rounded-lg border border-green-500">
                <FontAwesomeIcon icon={faCheck} />
              </button>
              <button onClick={() => handleAction(item.id, "reject")} className="text-red-500 w-10 h-10 rounded-lg border border-red-500">
                <FontAwesomeIcon icon={faClose} />
              </button>
              <button onClick={() => openModal(item)} className="text-blue-500 w-10 h-10 rounded-lg border border-blue-500">
                <FontAwesomeIcon icon={faInfo} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
        </table>
      </div>
      {/* Modal Detail */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[95%] max-w-2xl max-h-[95vh] overflow-y-auto">
            <div className="flex justify-between">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Detail Layanan</h2>
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
                <p className="text-gray-800 dark:text-white">{selectedService.bussiness_name}</p>
              </div>
              <div>
                <label className="block text-gray-500">Jenis Layanan</label>
                <p className="text-gray-800 dark:text-white">{selectedService.type}</p>
              </div>
              <div>
                <label className="block text-gray-500">Alamat</label>
                <p className="text-gray-800 dark:text-white">{selectedService.address}</p>
              </div>
              <div>
                <label className="block text-gray-500">No. Telp</label>
                <p className="text-gray-800 dark:text-white">{selectedService.alternative_phone}</p>
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

            {/* Map */}
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

{selectedService.photos && selectedService.photos.length > 0 && (
  <div className="mt-6">
    <label className="block text-gray-500 text-sm mb-1">Foto Layanan</label>
    <Slider
      dots={true}
      infinite={true}
      speed={500}
      slidesToShow={2}
      slidesToScroll={1}
      className="rounded"
    >
      {selectedService.photos.map((photo, index) => (
        <div key={index} className="px-2">
          <img
            src={photo}
            alt={`foto-${index}`}
            className="w-full h-40 object-cover rounded"
          />
        </div>
      ))}
    </Slider>
  </div>
)}

          </div>
        </div>
      )}
    </section>
    )}
    
</>
 
  );
}
