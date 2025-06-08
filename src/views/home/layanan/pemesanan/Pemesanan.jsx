import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import background from "../../../../assets/images/bg-white.png";
import orang from "../../../../assets/images/orang.png";
import { formatJam } from "../../../../utils/FormatDateTime";
import { getCurrentPosition } from "../../../../utils/GeoLocation";
import {
  faUpload,
  faStar,
  faClock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import MotionDiv from "../../../../utils/TransitionSmoth";

export default function Pemesanan({
  data = [],
  onSubmit,
  isLoading,
}) {
  const markerRef = useRef(null);
  const detailService = data.detail_services ?? [];
  const [coords, setCoords] = useState({ lat: -6.2, lng: 106.8 });
  const [map, setMap] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [form, setForm] = useState({
    description: "",
    vehicle: "",
    vehicle_brand: "",
    police_number: "",
    detail_service_name: "",
    address: "",
    postal_code: "",
  });
  console.log(form);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        setCoords({ lat: latitude, lng: longitude });
        await fetchAlamat(latitude, longitude);
        setForm((prev) => ({
          ...prev,
          latitude,
          longitude,
        }));
  
        const userMap = L.map("map").setView([latitude, longitude], 15);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "&copy; OpenStreetMap contributors",
        }).addTo(userMap);
  
        // 🔴 Buat marker pertama kali
        const initialMarker = L.marker([latitude, longitude], {
          draggable: true,
        }).addTo(userMap);
        markerRef.current = initialMarker;
  
        // Jika marker digeser manual
        initialMarker.on("dragend", async (e) => {
          const { lat, lng } = e.target.getLatLng();
          setCoords({ lat, lng });
          setForm((prev) => ({
            ...prev,
            latitude: lat,
            longitude: lng,
          }));
          await fetchAlamat(lat, lng);
        });
  
        // Jika peta diklik, pindahkan marker
        userMap.on("click", async (e) => {
          const { lat, lng } = e.latlng;
          if (markerRef.current) {
            markerRef.current.setLatLng([lat, lng]);
          }
          setCoords({ lat, lng });
          setForm((prev) => ({
            ...prev,
            latitude: lat,
            longitude: lng,
          }));
          await fetchAlamat(lat, lng);
        });
  
        setMap(userMap);
      },
      (err) => {
        console.error("Gagal ambil lokasi", err);
        alert("Tidak bisa mengambil lokasi. Periksa pengaturan browser.");
      }
    );
  
    return () => {
      if (map) map.remove();
    };
  }, []);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      description: form.description,
      vehicle: form.vehicle,
      vehicle_brand: form.vehicle_brand,
      police_number: form.police_number,
      detail_service_name: form.detail_service_name,
      photo: selectedImage,
      longitude: coords.lng,
      latitude: coords.lat,
      address: form.address,
      postal_code: form.postal_code
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const fetchAlamat = async (lat, lng) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await res.json();
      setForm((prev) => ({
        ...prev,
        address: data.display_name || "",
        postal_code: data.address?.postcode || "",
      }));
    } catch (err) {
      console.error("Gagal mengambil alamat:", err);
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
        <MotionDiv
        >
          <h2 className="pt-20 mb-2 text-2xl font-bold text-center text-black sm:pt-20">
            Form Pemesanan
          </h2>
          <p className="mb-8 text-center text-black-600">
            Isi data yang dibutuhkan sesuai dengan keperluan anda!
          </p>
        </MotionDiv>

      <MotionDiv>
        <div className="grid grid-cols-1 gap-6 mb-10 md:grid-cols-3">
          <div className="w-full p-4 bg-white rounded-lg shadow-md h-fit">
            <img src={orang} alt="Bengkel" className="mb-3 rounded" />
            <h3 className="text-lg font-bold">Bengkel Andalan Motor</h3>
            <p className="mt-1 text-sm text-gray-500 ">
              <FontAwesomeIcon icon={faStar} className="mr-2 text-yellow-400" />
              {parseFloat(data.average_rating)} / 5 • {data.type}
            </p>
            <p className="flex items-center mt-1 space-x-4 text-sm">
              <FontAwesomeIcon icon={faClock} className="text-green-600" />
              <span className="font-medium text-green-600">
                {formatJam(data.opening_time)} - {formatJam(data.closing_time)}
              </span>
            </p>
            <p className="flex items-center mt-1 space-x-4 text-sm">
              <FontAwesomeIcon icon={faPhone} className="text-biru" />
              <span>{data.alternative_phone}</span>
            </p>
            <p className="mt-4 mb-1 text-sm font-bold text-black">Deskripsi</p>
            <p className="text-sm text-gray-600 ">{data.description}</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full col-span-2 p-6 space-y-4 bg-white rounded-lg shadow-md"
          >
            <label className="font-bold">Deskripsi Keluhan</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              rows="3"
              name="description"
              placeholder="Silahkan masukkan keluhan anda"
              value={form.description}
              onChange={handleChange}
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <select
                name="vehicle"
                value={form.vehicle}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
              >
                <option value="">Pilih Jenis Kendaraan</option>
                <option value="mobil">Mobil</option>
                <option value="truk">Truk</option>
                <option value="sepeda_motor">Sepeda Motor</option>
                <option value="lainnya">Lainnya</option>
              </select>

              <input
                type="text"
                className="p-2 border border-gray-300 rounded"
                name="vehicle_brand"
                placeholder="Merk Kendaraan"
                value={form.vehicle_brand}
                onChange={handleChange}
              />
              <input
                type="text"
                name="police_number"
                className="p-2 border border-gray-300 rounded"
                placeholder="Nomor Polisi"
                value={form.police_number}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label className="font-bold">Metode Layanan</label>
              <div className="space-y-1">
                <div className="flex gap-5 flex-wrap md:grid md:grid-cols-2">
                  {detailService.map((item, index) => (
                    <div
                      className="w-100 border rounded border-slate-200 p-2"
                      key={index}
                    >
                      <label>
                        <input
                          type="radio"
                          value={item.list_service_id}
                          onChange={handleChange}
                          name="detail_service_name"
                          className="mr-2 border"
                        />
                        {item.list_service.type}
                      </label>
                      <p className="text-sm text-gray-600 mt-2">
                        {item.list_service.description}
                      </p>
                    </div>
                  ))}
                </div>
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
                value={form.address}
                readOnly
                placeholder="Latitude"
              />
              <input
                type="text"
                className="p-2 border border-gray-300 rounded"
                value={form.postal_code}
                readOnly
                placeholder="Longitude"
              />
            </div>

            {isLoading ? (
              <button
                type="button"
                disabled
                className="w-full px-4 py-2 mt-4 font-bold text-white bg-red-700 rounde flex justify-center items-center gap-2"
              >
                <span className="inline-block w-4 h-4 mr-2 border-2 border-t-2 border-gray-300 border-t-gray-800 rounded-full animate-spin align-middle" />
                Sedang Mengirim
              </button>
            ) : (
              <button
                type="submit"
                className="w-full px-4 py-2 mt-4 font-bold text-white bg-red-600 rounded hover:bg-red-700"
              >
                Kirim
              </button>
            )}
          </form>
        </div>
        </MotionDiv>
      </div>
    </section>
  );
}
