import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import background from "../../../assets/images/bg-white.png";
import orang from "../../../assets/images/orang.png";
import {
  faUpload,
  faStar,
  faClock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"; // ✅ Tambahkan ini

export default function Pemesanan() {
  const [coords, setCoords] = useState({ lat: -6.2, lng: 106.8 });
  const [map, setMap] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ lat: latitude, lng: longitude });

        const userMap = L.map("map").setView([latitude, longitude], 15);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "&copy; OpenStreetMap contributors",
        }).addTo(userMap);

        L.marker([latitude, longitude])
          .addTo(userMap)
          .bindPopup("Lokasi Anda")
          .openPopup();

        setMap(userMap);
      },
      (error) => {
        console.error("Gagal mendapatkan lokasi:", error.message);
        const fallbackMap = L.map("map").setView([coords.lat, coords.lng], 13);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "&copy; OpenStreetMap contributors",
        }).addTo(fallbackMap);
        setMap(fallbackMap);
      }
    );

    return () => {
      if (map) map.remove();
    };
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  return (
    <section className="w-[90%] max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-[60px] overflow-hidden bg-cover bg-center bg-no-repeat mb-10">
      <img
        src={background}
        alt="Hero background"
        className="absolute inset-0 z-0 object-cover w-full h-[300px] sm:h-[300px] lg:h-[300px]"
      />
      <div className="relative z-10 ">
        <h2 className="pt-20 mb-2 text-2xl font-bold text-center text-black sm:pt-20">
          Form Pemesanan
        </h2>
        <p className="mb-8 text-center text-black-600">
          Isi data yang dibutuhkan sesuai dengan keperluan anda !
        </p>

        {/* ✅ Tambahkan animasi pada container */}
        <motion.div
          className="grid grid-cols-1 gap-6 mb-10 md:grid-cols-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <form className="w-full col-span-2 p-6 space-y-4 bg-white rounded-lg shadow-md">
            <label className="font-bold">Deskripsi Keluhan</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              rows="3"
              placeholder="Silahkan masukkan keluhan anda"
            ></textarea>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <select className="p-2 border border-gray-300 rounded">
                <option value="">Pilih Jenis Kendaraan</option>
                <option value="mobil">Mobil</option>
                <option value="truk">Truk</option>
                <option value="sepeda_motor">Sepeda Motor</option>
                <option value="lainnya">Lainnya</option>
              </select>

              <input
                type="text"
                className="p-2 border border-gray-300 rounded"
                placeholder="Tipe Kendaraan"
              />
              <input
                type="text"
                className="p-2 border border-gray-300 rounded"
                placeholder="Nomor Polisi"
              />
            </div>

            <div className="space-y-2">
              <label className="font-bold">Metode Layanan</label>
              <div className="space-y-1">
                <label className="block">
                  <input type="radio" name="layanan" className="mr-2" />
                  Antar ke bengkel
                </label>
                <label className="block">
                  <input type="radio" name="layanan" className="mr-2" />
                  Bengkel datang ke lokasi
                </label>
                <label className="block">
                  <input type="radio" name="layanan" className="mr-2" />
                  Layanan Towing
                </label>
              </div>
            </div>

            <div>
              <label className="font-bold">Pilih Gambar</label>
              <div className="flex items-center mt-2">
                <input
                  type="file"
                  id="upload"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <label
                  htmlFor="upload"
                  className="px-4 py-2 text-sm font-bold text-white bg-orange-500 rounded cursor-pointer hover:bg-orange-600"
                >
                  <FontAwesomeIcon icon={faUpload} className="mr-2" />
                  Upload Gambar
                </label>
                {previewUrl && (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="object-cover w-20 h-20 ml-2 border rounded"
                  />
                )}
              </div>
            </div>

            <div className="h-56 mt-4 overflow-hidden border rounded">
              <div id="map" className="w-full h-full" />
            </div>

            <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
              <input
                type="text"
                className="p-2 border border-gray-300 rounded"
                value={coords.lat}
                readOnly
                placeholder="Latitude"
              />
              <input
                type="text"
                className="p-2 border border-gray-300 rounded"
                value={coords.lng}
                readOnly
                placeholder="Longitude"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 font-bold text-white bg-red-600 rounded hover:bg-red-700"
            >
              Kirim
            </button>
          </form>

          <div className="w-full p-4 bg-white rounded-lg shadow-md h-fit">
            <img src={orang} alt="Bengkel" className="mb-3 rounded" />
            <h3 className="text-lg font-bold">Bengkel Andalan Motor</h3>
            <p className="mt-1 text-sm text-gray-500 ">
              <FontAwesomeIcon icon={faStar} className="mr-2 text-yellow-400" />
              4 / 5 • Bengkel • 10 mnt
            </p>
            <p className="flex items-center mt-1 space-x-4 text-sm">
              <FontAwesomeIcon icon={faClock} className="text-green-600" />
              <span className="font-medium text-green-600">Buka 24 Jam</span>
            </p>
            <p className="flex items-center mt-1 space-x-4 text-sm">
              <FontAwesomeIcon icon={faPhone} className="text-biru" />
              <span>0816-0789-2456</span>
            </p>
            <p className="mt-4 mb-1 text-sm font-bold text-black">Deskripsi</p>
            <p className="text-sm text-gray-600 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
