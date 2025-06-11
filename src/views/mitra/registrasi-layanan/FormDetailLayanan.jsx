import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import MotionDiv from "../../../utils/TransitionSmoth";
import { MapModel } from "../../../models/MapModel";

// Atur ikon marker
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Fungsi reverse geocoding
const fetchAddressFromLatLng = async (lat, lng) => {
  
  try {
    const map = new MapModel();
    const res = await map.reverseGeocode(lat, lng);
    const data = res.data;
    return {
      address: data.display_name || "",
      postal_code: data.address?.postcode || "",
    };
  } catch (error) {
    console.error("Gagal mengambil alamat:", error);
    return { address: "", postal_code: "" };
  }
};

// Tombol "Lokasi Saya"
function LocateButton({ setFormData }) {
  const map = useMap();

  const handleClick = () => {
    if (!navigator.geolocation) {
      alert("Geolocation tidak didukung oleh browser Anda.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        // Ambil alamat dari koordinat
        const { address, postal_code } = await fetchAddressFromLatLng(lat, lng);

        // Update form data
        setFormData((prev) => ({
          ...prev,
          latitude: lat,
          longitude: lng,
          address,
          postal_code,
        }));

        // Arahkan peta ke lokasi baru
        map.flyTo([lat, lng], 15, { duration: 1.5 });
      },
      () => {
        alert("Gagal mengambil lokasi.");
      }
    );
  };

  return (
    <button
      onClick={handleClick}
      className="absolute z-[1000] top-2 right-4 px-4 py-2 bg-biru text-white text-sm rounded shadow-md hover:bg-blue-700 transition"
    >
      Lokasi Saya
    </button>
  );
}


// Menangani klik di map
function ClickableMap({ setFormData }) {
  const map = useMap();

  useEffect(() => {
    const handleClick = async (e) => {
      const { lat, lng } = e.latlng;

      const { address, postal_code } = await fetchAddressFromLatLng(lat, lng);

      setFormData((prev) => ({
        ...prev,
        latitude: lat,
        longitude: lng,
        address,
        postal_code,
      }));

      map.flyTo([lat, lng], map.getZoom());
    };

    map.on("click", handleClick);
    return () => {
      map.off("click", handleClick);
    };
  }, [map, setFormData]);

  return null;
}

const FormDetailLayanan = ({
  formData,
  setFormData,
  handleChange,
  handleNext,
  handleBack,
  listService,
  position,
}) => {
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const id = parseInt(value);

    if (checked) {
      setFormData({
        ...formData,
        list_service_id: [...formData.list_service_id, id],
      });
    } else {
      setFormData({
        ...formData,
        list_service_id: formData.list_service_id.filter(
          (item) => item !== id
        ),
      });
    }
  };

  return (
    <MotionDiv>
      <div className="flex-1 p-8 bg-white shadow-md rounded-xl">
        <h4 className="pb-2 mb-2 font-bold border-b text-md">Detail Layanan</h4>

        {/* Jenis kendaraan */}
        <div className="mb-4">
          <label className="text-sm font-bold text-black sm:text-base">
            Layanan Kendaraan
          </label>
          <p className="mb-2 text-sm text-gray-500">
            Silahkan pilih layanan kendaraan yang tersedia di layanan anda.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            {[
              "Sepeda Motor",
              "Mobil",
              "Truck",
              "Semua (mobil, motor,truck)",
            ].map((item) => (
              <label
                key={item}
                className="flex items-center w-full gap-2 p-4 border rounded-md shadow-sm cursor-pointer bg-gray-50 hover:border-blue-500 sm:w-auto"
              >
                <input
                  type="radio"
                  name="vehicle_type"
                  value={item}
                  checked={formData.vehicle_type === item}
                  onChange={handleChange}
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Metode layanan */}
        <div className="mb-4">
          <label className="text-sm font-bold text-black sm:text-base">
            Metode Penanganan Yang Disediakan
          </label>
          <p className="mb-2 text-sm text-gray-500">
            Pilih salah satu metode yang disediakan oleh bengkel anda!
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            {listService.map((item) => (
              <label key={item.id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="list_service_id"
                  value={item.id}
                  checked={formData.list_service_id.includes(item.id)}
                  onChange={handleCheckboxChange}
                />
                {item.type}
              </label>
            ))}
          </div>
        </div>

        {/* Harga */}
        <div className="mb-4">
          <label className="text-sm font-bold text-black sm:text-base">
            Range Harga
          </label>
          <p className="mb-2 text-sm text-gray-500">
            Silahkan masukkan harga terendah dan tertinggi.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <input
              type="number"
              placeholder="Min"
              className="w-full p-2 border rounded-md sm:w-40"
              name="start_price_range"
              value={formData.start_price_range}
              onChange={handleChange}
            />
            <span>—</span>
            <input
              type="number"
              placeholder="Max"
              className="w-full p-2 border rounded-md sm:w-40"
              name="end_price_range"
              value={formData.end_price_range}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Spesialisasi */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-black sm:text-base">
            Jenis Keahlian Yang Dikuasai
          </label>
          <textarea
            rows={4}
            placeholder="Pisahkan dengan koma, contoh: Menambal Ban Tubeless, Ganti Oli Motor, Service Rem"
            className="w-full p-2 text-sm border rounded-md"
            name="specialist_names"
            value={formData.specialist_names}
            onChange={handleChange}
          />
        </div>

        {/* Lokasi */}
        <div className="relative mb-8 h-80">
          <label className="mb-2 text-sm font-bold text-black sm:text-base">
            Lokasi Layanan
          </label>
          {position ? (
            <div className="h-full overflow-hidden rounded-xl">
              <MapContainer
                center={position}
                zoom={15}
                scrollWheelZoom={true}
                className="w-full h-full"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; OpenStreetMap contributors"
                />
                <Marker position={[formData.latitude, formData.longitude]}>
                  <Popup>Lokasi Anda Sekarang</Popup>
                </Marker>
                <LocateButton setFormData={setFormData} />
                <ClickableMap setFormData={setFormData} />
              </MapContainer>
            </div>
          ) : (
            <p className="mt-10 text-center text-gray-500">
              Mengambil lokasi...
            </p>
          )}
        </div>

        {/* Alamat */}
        <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
          <div>
            <label className="mb-2 text-sm font-bold text-black sm:text-base">
              Alamat
            </label>
            <input
              type="text"
              className="w-full p-2 text-sm border rounded-md"
              value={formData.address}
              readOnly
            />
          </div>
          <div>
            <label className="mb-2 text-sm font-bold text-black sm:text-base">
              Kode Pos
            </label>
            <input
              type="text"
              className="w-full p-2 text-sm border rounded-md"
              value={formData.postal_code}
              readOnly
            />
          </div>
        </div>

        {/* Navigasi */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handleBack}
            className="px-6 py-2 text-sm font-bold text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Kembali
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-2 text-sm font-bold text-white rounded-md bg-biru hover:bg-blue-700"
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </MotionDiv>
  );
};

export default FormDetailLayanan;
