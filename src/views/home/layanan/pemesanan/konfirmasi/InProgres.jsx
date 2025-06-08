import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import background from "../../../../../assets/images/bg-white.png";
import sepeda from "../../../../../assets/images/sepeda.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faComments } from "@fortawesome/free-solid-svg-icons";
import { getUser } from "../../../../../utils/LocalStorage";
import ChatPage from "../../../../../pages/ChatPage";
const InProgres = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => setIsOpen(prev => !prev);
    const user_id = Number(getUser().id);
  
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

        <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto mb-10 md:grid-cols-4">
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
                  <div className="absolute flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-blue-700 rounded-full -left-6">
                    2
                  </div>
                  <span className="text-sm font-semibold text-blue-700">
                    Diterima
                  </span>
                </div>

                <div className="relative flex items-center mb-10 space-x-4">
                  <div className="absolute -left-6">
                    <span className="absolute inline-flex w-8 h-8 bg-blue-400 rounded-full opacity-75 animate-ping"></span>
                    <span className="relative flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-blue-700 rounded-full">
                      3
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-blue-700">
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

            <div className="p-4 bg-white shadow-md rounded-xl">
              <h2 className="mb-3 text-base font-bold text-gray-800">
                Chat dengan Bengkel
              </h2>
              <p className="mb-2 text-sm text-gray-600">
                Ingin menanyakan estimasi waktu atau konfirmasi ulang?
              </p>
              <button className="w-full px-4 py-2 text-white transition bg-blue-700 rounded hover:bg-blue-800">
                <FontAwesomeIcon icon={faComments} onClick={handleToggle} className="mr-2" />
                Buka Chat
              </button>
            </div>
          </div>

          <div className="col-span-1 space-y-4 md:col-span-3">
            <div className="p-4 text-white rounded-md shadow-sm bg-biru">
              <p>
                <FontAwesomeIcon
                  icon={faBullhorn}
                  className="mr-2 text-white"
                />
                <strong>Terimakasih!</strong> Pesanan anda telah{" "}
                <strong>diterima</strong> oleh bengkel terkait. Silakan pantau
                status selanjutnya.
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
                  {data?.id}
                </span>{" "}
                telah diterima oleh bengkel <strong>{data.service?.bussiness_name}</strong>. Montir
                telah ditugasku menuju lokasi anda!.
              </p>
            </div>

            <div className="p-4 space-y-3 border rounded-md shadow-sm bg-gray-50">
              <h4 className="pb-2 font-semibold border-b text-md">
                Detail Pesanan Anda
              </h4>
              <div className="flex flex-col items-center">
                <img
                  src={sepeda}
                  alt="Motor Melaju"
                />
                <p className="text-center text-gray-700">
                  Montir Sedang menuju lokasi anda. Mohon bersabar!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default InProgres;
