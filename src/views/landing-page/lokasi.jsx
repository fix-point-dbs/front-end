import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

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
      className="absolute z-[1000] top-2 right-4 px-4 py-2 bg-biru text-white text-sm rounded shadow-md hover:bg-blue-700 transition mb-20"
    >
      Lokasi Saya
    </button>
  );
}

export default function CurrentLocationMap() {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation tidak didukung oleh browser ini.");
      return;
    }

    if ("permissions" in navigator) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
          if (permissionStatus.state === "granted") {
            getLocation();
          } else if (permissionStatus.state === "prompt") {
            getLocation();
          } else if (permissionStatus.state === "denied") {
            alert(
              "Akses lokasi ditolak. Silakan aktifkan izin lokasi di pengaturan browser."
            );
          }

          permissionStatus.onchange = () => {
            console.log("Permission berubah jadi:", permissionStatus.state);
          };
        });
    } else {
      getLocation();
    }

    function getLocation() {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        (err) => {
          console.error("Gagal ambil lokasi", err);
          alert("Tidak bisa mengambil lokasi. Periksa pengaturan browser.");
        }
      );
    }
  }, []);

  return (
    <section className="px-12 mt-20 sm:px-12 md:px-24 lg:px-24 xl:px-36">
      <div className="flex items-center justify-center">
        <div className="w-24 border-t border-biru"></div>
        <p className="mx-4 mb-1 text-sm font-black text-biru sm:text-sm">
          TOWING & BENGKEL
        </p>
        <div className="w-24 border-t border-biru"></div>
      </div>
      <h2 className="mb-0 text-sm font-bold text-center sm:text-xl md:text-xl lg:text-xl xl:text-xl">
        Peta Persebaran Di Berbagai Wilayah
      </h2>
      <p className="mb-4 text-sm text-center sm:text-sm">
        Berikut merupakan peta untuk menampilkan bengkel maupun towing di
        beberapa wilayah!
      </p>

      <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-20">
        {position ? (
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={true}
            className="z-10 w-full h-full"
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
        ) : (
          <p className="mt-10 text-center text-gray-500 font">
            Mengambil lokasi...
          </p>
        )}
      </div>
    </section>
  );
}
