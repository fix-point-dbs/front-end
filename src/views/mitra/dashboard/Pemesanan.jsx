import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  currentLocationIcon,
  serviceIcon,
} from "../../../utils/CustomIconMarker";
import { getCurrentPosition } from "../../../utils/GeoLocation";
import ChatPage from "../../../pages/ChatPage";
import { getUser } from "../../../utils/LocalStorage";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(utc);
dayjs.extend(relativeTime);
export default function Pemesanan({ orders = [], onAccept, onReject, onInProgress, onDone }) {
  const [position, setPosition] = useState(null);
  const [chatOpenId, setChatOpenId] = useState(null);
  const [name, setName] = useState("");

  const handleToggle = (id, name) => {
    if (chatOpenId === id) {
      setChatOpenId(null); 
      setName("");
    } else {
      setChatOpenId(id);
      setName(name);
    }
  };
  const user_id = Number(getUser().id);
  useEffect(() => {
    
    getCurrentPosition(
      (pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
      },
      (err) => {
        console.error("Gagal ambil lokasi", err);
        alert("Tidak bisa mengambil lokasi. Periksa pengaturan browser.");
      }
    );
  }, []);

  return (
    <>
    {chatOpenId !== null && (
    <ChatPage isOpen={true}
    onClose={() => setChatOpenId(null)} user_id={chatOpenId} mitra_id={user_id} name={name} />
    )}
    <div className="p-4 overflow-x-auto bg-white shadow rounded-xl">
      <h2 className="mb-4 text-sm font-bold text-black md:text-base">
        Pesanan
      </h2>

      <div className="flex">
        {orders?.map((order) => (
          <div
            key={order.id}
            className="w-[500px] rounded border py-3 px-5"
          >
            <div className="flex justify-between items-center mb-2 border-b pb-1">
            
            <div>
              <h2 className="text-sm font-bold text-black md:text-base">
                No Pesanan :{" "}
                <span className="text-orange-500 font-bold">{order.id}</span>
              </h2>
              <small>{dayjs.utc(order.createdAt).local().fromNow()}</small>
              </div>
              <h1 className="text-sm font-bold text-black md:text-base"><span className="w-3 h-3 mr-2 rounded-full inline-block bg-red-500 animate-ping"></span>{order.status}</h1>
 

        
            </div>

            {position && (
              <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={false}
                className="h-[250px]"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {position && (
                  <Marker position={position} icon={currentLocationIcon}>
                    <Popup>Lokasi Saya</Popup>
                  </Marker>
                )}
                {order.latitude && order.longitude ? (
                  <Marker
                    position={[order.latitude, order.longitude]}
                    icon={serviceIcon}
                  >
                    <Popup>
                      Bengkel Andalan Motor <br /> Jl. Mekar Jaya No. 10,
                      Bandung
                    </Popup>
                  </Marker>
                ) : null}
              </MapContainer>
            )}

            <div className="grid grid-cols-1 gap-2 my-2 text-sm md:grid-cols-2">
              <div>
                <label className="block text-gray-500">Jarak</label>
                <p className="text-gray-800">30 km</p>
              </div>
              <div>
                <label className="block text-gray-500">Waktu Tempuh</label>
                <p className="text-gray-800">30 Menit</p>
              </div>
            <div>
                  <label className="block text-gray-500">Nama Pemesan</label>
                  <p className="text-gray-800">{order.user.name}</p>
                </div>
                <div>
                  <label className="block text-gray-500">Alamat Lokasi</label>
                  <p className="text-gray-800">{order.address}</p>
                </div>
                <div>
                  <label className="block text-gray-500">Layanan</label>
                  <p className="text-gray-800">{order.detail_service_name}</p>
                </div>
                <div>
                  <label className="block text-gray-500">No Hp</label>
                  <p className="text-gray-800">{order.user.phone}</p>
                </div>
                <div>
                  <label className="block text-gray-500">Kendaraan</label>
                  <p className="text-gray-800">{order.vehicle}</p>
                </div>
                <div>
                  <label className="block text-gray-500">Merk Kendaraan</label>
                  <p className="text-gray-800">{order.vehicle_brand}</p>
                </div>
                <div>
                  <label className="block text-gray-500">No Polisi</label>
                  <p className="text-gray-800">{order.police_number}</p>
                </div>
                <div>
                  <label className="block text-gray-500">Keluhan</label>
                  <p className="text-gray-800">{order.description}</p>
                </div>
            </div>
            <div className="flex">
                {order.status === "pending" && (
                  <>
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
                      onClick={() => onAccept(order.id)}
                    >
                      Terima
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                      onClick={() => onReject(order.id)}
                    >
                      Tolak
                    </button>
                  </>
                )}
                {order.status === "approved" && (
                  <>
                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mr-2"
                      onClick={() => onInProgress(order.id)} 
                    >
                      Dalam Perjalanan
                    </button>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleToggle(order.user_id, order.user?.name)}
                    >
                      Chat
                    </button>
                  </>
                )}
                {order.status === "in progress" && (
                  <>
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
                      onClick={() => onDone(order.id)} 
                    >
                      Selesaikan
                    </button>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleToggle(order.user_id, order.user?.name)}
                    >
                      Chat
                    </button>
                  </>
                )}
              </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
