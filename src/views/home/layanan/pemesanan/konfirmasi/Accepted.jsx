import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import background from "../../../../../assets/images/bg-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faComments } from "@fortawesome/free-solid-svg-icons";
import ChatPage from "../../../../../pages/ChatPage";
import { formatTanggalDanWaktu } from "../../../../../utils/FormatDateTime";
import { getUser } from "../../../../../utils/LocalStorage";
const Accepted = ({ data, isLoading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(prev => !prev);
  const user_id = Number(getUser().id);
  
  useEffect(() => {
    
    const map = L.map("map").setView([-7.8259926, 113.8286264], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const userLocation = [lat, lng];
          L.marker(userLocation)
            .addTo(map)
            .bindPopup("Lokasi Anda")
            .openPopup();
          map.setView(userLocation, 15);
        },
        () => {
          console.warn("Tidak dapat mengambil lokasi pengguna.");
        }
      );
    }
  }, []);

  return (
    <>
     <ChatPage isOpen={isOpen} onClose={handleToggle} user_id={user_id} mitra_id={data?.service?.user_id} name={data?.service?.bussiness_name} />
    <section className="w-[90%] max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-[60px] overflow-hidden bg-cover bg-center bg-no-repeat mb-10">
      <img
        src={background}
        alt="Hero background"
        className="absolute inset-0 z-0 object-cover w-full h-[300px] sm:h-[300px] lg:h-[300px]"
      />
      <div className="relative z-10 ">
     
          <h2 className="pt-20 mb-2 text-2xl font-bold text-center text-black sm:pt-20">
            Konfirmasi Pemesanan
          </h2>
          <p className="mb-8 text-center text-black-600">
            Silahkan pantau dashboard untuk melihat pesanan anda!
          </p>

        <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-4">
          <div className="col-span-1 space-y-4">
            <div className="p-4 bg-white shadow-md rounded-xl h-fit">
              <h2 className="mb-6 text-base font-bold text-gray-800">
                Konfirmasi Pesanan
              </h2>
              <div className="relative ml-6 border-l-2 border-gray-200">
                <div className="relative flex items-center mb-10 space-x-4">
                  <div className="absolute flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-blue-700 rounded-full -left-6">
                    1
                  </div>
                  <span className="text-sm font-semibold text-blue-700">
                    Menunggu
                  </span>
                </div>

                <div className="relative flex items-center mb-10 space-x-4">
                  <div className="absolute -left-6">
                    <span className="absolute inline-flex w-8 h-8 bg-blue-400 rounded-full opacity-75 animate-ping"></span>
                    <span className="relative flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-blue-700 rounded-full">
                      2
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-blue-700">
                    Diterima
                  </span>
                </div>

                <div className="relative flex items-center mb-10 space-x-4">
                  <div className="absolute flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-gray-300 rounded-full -left-6">
                    3
                  </div>
                  <span className="text-sm text-gray-400">
                    Dalam Perjalanan
                  </span>
                </div>

                <div className="relative flex items-center mb-10 space-x-4">
                  <div className="absolute flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-gray-300 rounded-full -left-6">
                    4
                  </div>
                  <span className="text-sm text-gray-400">Selesai</span>
                </div>
              </div>
            </div>

            {/* Card Chat */}
            <div className="p-4 bg-white shadow-md rounded-xl">
              <h2 className="mb-3 text-base font-bold text-gray-800">
                Chat dengan Bengkel
              </h2>
              <p className="mb-2 text-sm text-gray-600">
                Ingin menanyakan estimasi waktu atau konfirmasi ulang?
              </p>
              <button onClick={handleToggle} className="w-full px-4 py-2 text-white transition bg-blue-700 rounded hover:bg-blue-800">
                <FontAwesomeIcon icon={faComments} className="mr-2" />
                Buka Chat
              </button>
            </div>
          </div>

          <div className="col-span-1 space-y-4 md:col-span-3">
            <div className="p-4 text-black bg-green-300 rounded-md shadow-sm">
              <p>
                <FontAwesomeIcon
                  icon={faBullhorn}
                  className="mr-2 text-black"
                />
                <strong>Terimakasih!</strong> Pesanan anda telah{" "}
                <strong>diterima</strong> oleh bengkel terkait. Montir akan
                segera datang ke tempat anda. Jika ada masalah, silahkan chat
                bengkel terkait!
              </p>
            </div>

            <div className="p-4 bg-white border rounded-md shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{data.service?.bussiness_name}</h3>
                <span className="text-sm text-green-600">Buka 24 jam</span>
              </div>
              <p className="text-sm text-gray-700">
                Pesanan dengan nomor{" "}
                <span className="font-semibold text-red-600">
                  {data.id}
                </span>{" "}
                telah diterima oleh bengkel <strong>{data.service?.bussiness_name}</strong>. Montir
                akan segera datang ke tempat anda. Jika ada masalah, silahkan
                chat bengkel terkait.
              </p>
            </div>

             <div className="p-4 space-y-3 border rounded-md shadow-sm bg-gray-50">
                          <h4 className="pb-2 font-semibold border-b text-md">
                            Detail Pesanan Anda
                          </h4>
                          <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
                            <div>
                              <label className="block text-gray-500">Nama Pemesan</label>
                              <p className="text-gray-800">{data.user?.name}</p>
                            </div>
                            <div>
                              <label className="block text-gray-500">Nomor Hp</label>
                              <p className="text-gray-800">{data.user?.phone}</p>
                            </div>
                            <div>
                              <label className="block text-gray-500">
                                Layanan Kendaraan
                              </label>
                              <p className="text-gray-800">{data.vehicle}</p>
                            </div>
                            <div>
                              <label className="block text-gray-500">Metode Layanan</label>
                              <p className="text-gray-800">{data.detail_service_name}</p>
                            </div>
                            <div>
                              <label className="block text-gray-500">
                                Merk Kendaraan
                              </label>
                              <p className="text-gray-800">{data.vehicle_brand}</p>
                            </div>
                            <div>
                              <label className="block text-gray-500">
                                Nomor Polisi
                              </label>
                              <p className="text-gray-800">{data.police_number}</p>
                            </div>
                            <div>
                              <label className="block text-gray-500">Waktu Pemesanan</label>
                              <p className="text-gray-800">{formatTanggalDanWaktu(data.createdAt)}</p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <label className="block mb-2 text-gray-500">
                              Titik Lokasi Perjumpaan
                            </label>
                            <div className="grid grid-cols-1 gap-4 text-sm mb-3 md:grid-cols-2">
                            <div>
                              <label className="block text-gray-500">
                                Alamat
                              </label>
                              <p className="text-gray-800">{data.address}</p>
                            </div>
                            <div>
                              <label className="block text-gray-500">
                                Kode Pos
                              </label>
                              <p className="text-gray-800">{data.postal_code}</p>
                            </div>
                            </div>
                            <div id="map" className="w-full h-64 rounded-md" />
                          </div>
                        </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Accepted;
