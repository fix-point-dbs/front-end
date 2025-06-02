import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function LocateButton({ position }) {
  const map = useMap();

  const handleClick = () => {
    if (position) {
      map.flyTo(position, 15, { duration: 1.5 });
    }
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

const FormDetailLayanan = () => {
  const navigate = useNavigate();

  const [position, setPosition] = useState(null);

  const [formData, setFormData] = useState({
    kendaraan: "",
    penanganan: [],
    hargaMin: "",
    hargaMax: "",
    keahlian: "",
    lokasi: null,
    alamat: "",
    kodePos: "",
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation tidak didukung oleh browser ini.");
      return;
    }

    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const coords = [pos.coords.latitude, pos.coords.longitude];
          setPosition(coords);
          setFormData((prev) => ({ ...prev, lokasi: coords }));
          await fetchAlamat(coords[0], coords[1]);
        },
        (err) => {
          console.error("Gagal ambil lokasi", err);
          alert("Tidak bisa mengambil lokasi. Periksa pengaturan browser.");
        }
      );
    };

    if ("permissions" in navigator) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
          if (
            permissionStatus.state === "granted" ||
            permissionStatus.state === "prompt"
          ) {
            getLocation();
          } else {
            alert("Izin lokasi ditolak. Aktifkan di pengaturan browser.");
          }
        });
    } else {
      getLocation();
    }
  }, []);

  const fetchAlamat = async (lat, lng) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await res.json();
      setFormData((prev) => ({
        ...prev,
        alamat: data.display_name || "",
        kodePos: data.address?.postcode || "",
      }));
    } catch (err) {
      console.error("Gagal mengambil alamat:", err);
    }
  };

  const handleCheckboxChange = (value) => {
    setFormData((prev) => {
      const updated = prev.penanganan.includes(value)
        ? prev.penanganan.filter((v) => v !== value)
        : [...prev.penanganan, value];
      return { ...prev, penanganan: updated };
    });
  };

  const handleInputChange = (field, value) => {
    const num = parseInt(value);
    if (field === "hargaMin") {
      if (value < 0) return;
      if (num > parseInt(formData.hargaMax || 0)) {
        alert("Harga minimum tidak boleh lebih besar dari harga maksimum!");
        return;
      }
    }
    if (field === "hargaMax") {
      if (value < 0) return;
      if (num < parseInt(formData.hargaMin || 0)) {
        alert("Harga maksimum tidak boleh lebih kecil dari harga minimum!");
        return;
      }
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex-1 p-8 bg-white shadow-md rounded-xl">
      <h4 className="pb-2 mb-2 font-bold border-b text-md">Detail Layanan</h4>
      <div className="mb-4">
        <label className="text-sm font-bold text-black sm:text-base text-block">
          Layanan Kendaraan
        </label>
        <p className="mb-2 text-sm text-gray-500 sm:text-base">
          Silahkan pilih layanan kendaraan yang tersedia di layanan anda.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          {["Sepeda Motor", "Mobil", "Truck", "Semua (mobil, motor,truck)"].map(
            (item) => (
              <label
                key={item}
                className="flex items-center w-full gap-2 p-4 border rounded-md shadow-sm cursor-pointer bg-gray-50 hover:border-blue-500 sm:w-auto"
              >
                <input
                  type="radio"
                  name="kendaraan"
                  value={item}
                  checked={formData.kendaraan === item}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      kendaraan: e.target.value,
                    }))
                  }
                />
                {item}
              </label>
            )
          )}
        </div>
      </div>

      <div className="mb-4">
        <label className="text-sm font-bold text-black sm:text-base text-block">
          Metode Penanganan Yang Disediakan
        </label>
        <p className="mb-2 text-sm text-gray-500 sm:text-base">
          Pilih salah satu metode yang disediakan oleh bengkel anda!
        </p>
        <div className="flex flex-wrap gap-6 text-sm">
          {[
            "Bengkel datang ke tempat",
            "Antar Ke Bengkel",
            "Menyediakan Layanan Towing",
          ].map((item) => (
            <label key={item} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={item}
                checked={formData.penanganan.includes(item)}
                onChange={() => handleCheckboxChange(item)}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="text-sm font-bold text-black sm:text-base text-block">
          Range Harga
        </label>
        <p className="mb-2 text-sm text-gray-500 sm:text-base">
          Silahkan masukkan harga terendah dan tertinggi.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <input
            type="number"
            placeholder="Min"
            className="w-full p-2 border rounded-md sm:w-40"
            value={formData.hargaMin}
            onChange={(e) => handleInputChange("hargaMin", e.target.value)}
          />
          <span>—</span>
          <input
            type="number"
            placeholder="Max"
            className="w-full p-2 border rounded-md sm:w-40"
            value={formData.hargaMax}
            onChange={(e) => handleInputChange("hargaMax", e.target.value)}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-black sm:text-base">
          Jenis Keahlian Yang Dikuasai
        </label>
        <textarea
          rows={4}
          placeholder="Pisahkan dengan koma, contoh: Menambal Ban Tubeless, Ganti Oli Motor, Service Rem"
          className="w-full p-2 text-sm border rounded-md"
          value={formData.keahlian}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, keahlian: e.target.value }))
          }
        />
      </div>

      <div className="relative mb-8 h-80">
        <label className="mb-2 text-sm font-bold text-black sm:text-base text-block">
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
              <Marker position={position}>
                <Popup>Lokasi Anda Sekarang</Popup>
              </Marker>
              <LocateButton position={position} />
            </MapContainer>
          </div>
        ) : (
          <p className="mt-10 text-center text-gray-500">Mengambil lokasi...</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
        <div>
          <label className="mb-2 text-sm font-bold text-black sm:text-base text-block">
            Alamat
          </label>
          <input
            type="text"
            className="w-full p-2 text-sm border rounded-md"
            value={formData.alamat}
            readOnly
          />
        </div>
        <div>
          <label className="mb-2 text-sm font-bold text-black sm:text-base text-block">
            Kode Pos
          </label>
          <input
            type="text"
            className="w-full p-2 text-sm border rounded-md"
            value={formData.kodePos}
            readOnly
          />
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => navigate("/registrasi/informasi-layanan")}
          className="px-6 py-2 text-sm font-bold text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Kembali
        </button>
        <button
          onClick={() => navigate("/registrasi/foto-layanan")}
          className="px-6 py-2 text-sm font-bold text-white rounded-md bg-biru hover:bg-blue-700"
        >
          Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default FormDetailLayanan;
