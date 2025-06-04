import moment from "moment";
import React, { useEffect, useState } from "react";
import { FaReceipt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { getCurrentPosition } from "../../../utils/GeoLocation";

export default function RiwayatTransaksi({ bookings }) {
  const [position, setPosition] = useState(null);
  useEffect(() => {
    getCurrentPosition(
      (position) => {
        setPosition([position.coords.latitude, position.coords.longitude]);
        console.log("Latitude:", position.coords.latitude);
        console.log("Longitude:", position.coords.longitude);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  return (
    <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-6">
      <div className="flex items-center justify-center gap-2 p-4 mb-6 bg-gray-100 border rounded-xl">
        <FaReceipt className="text-2xl text-black" />
        <h2 className="text-base font-bold text-black">
          Riwayat Transaksi Anda
        </h2>
      </div>

      {bookings?.map((item) => (
        <div
          key={item.id}
          className="relative p-4 mb-6 bg-white border shadow-sm sm:p-6 rounded-xl sm:text-base"
        >
          <div className="flex flex-col pb-2 mb-4 border-b sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-bold text-black text-medium">
              {item.service?.bussiness_name}
            </h3>
            {item.status === "done" && (
              <p
                className={`px-3 py-1 mt-2 text-sm font-semibold text-white rounded-full inline-block w-fit sm:mt-0 bg-green-600`}
              >
                {item.status}
              </p>
            )}
            {(item.status === "in progress" || item.status === "pending") && (
              <p className="px-3 py-1 mt-2 text-sm font-semibold text-white rounded-full inline-block w-fit sm:mt-0 bg-yellow-600">
                {item.status}
              </p>
            )}
            {item.status === "rejected" && (
              <p
                className={`px-3 py-1 mt-2 text-sm font-semibold text-white rounded-full inline-block w-fit sm:mt-0 bg-red-600`}
              >
                {item.status}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 text-gray-800 md:grid-cols-2 gap-y-4 gap-x-8">
            <div className="space-y-2">
              <div>
                <span className="block text-sm font-semibold text-black">
                  Waktu Pemesanan
                </span>
                <p className="text-sm">{moment(item.createdAt).format("LLL")}</p>
              </div>
              <div>
                <span className="block text-sm font-semibold text-black">
                  Layanan Kendaraan
                </span>
                <p className="text-sm">{item.detail_service_name}</p>
              </div>
              <div>
                <span className="block text-sm font-semibold text-black">
                  Lokasi
                </span>
                <p className="text-sm">{item.address}</p>
              </div>
            </div>

            <div className="space-y-2">
              
            <div>
                <span className="block text-sm font-semibold text-black">
                  Jenis Kendaraan
                </span>
                <p className="text-sm">{item.vehicle}</p>
              </div>
              <div>
                <span className="block text-sm font-semibold text-black">
                  Merk Kendaraan
                </span>
                <p className="text-sm">{item.vehicle_brand}</p>
              </div>
            <div>
                <span className="block text-sm font-semibold text-black">
                  Deskripsi
                </span>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
            
            <MapContainer
              center={[item.latitude, item.longitude]}
              zoom={13}
              style={{ height: "200px", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[item.latitude, item.longitude]}>
                <Popup>{item.address}</Popup>
              </Marker>

              {position && (
                <Marker position={position}>
                  <Popup>Anda</Popup>
                </Marker>
              )}
            </MapContainer>
          </div>
        </div>
      ))}
    </div>
  );
}
