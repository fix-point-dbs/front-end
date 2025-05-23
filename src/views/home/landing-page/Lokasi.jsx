import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  Circle,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import currentIconUrl from "../../../assets/icons/current-location.png";
import serviceIconUrl from "../../../assets/icons/service.png";

const currentLocationIcon = new L.Icon({
  iconUrl: currentIconUrl,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -30],
});

const serviceIcon = new L.Icon({
  iconUrl: serviceIconUrl,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -30],
});

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function Lokasi({ data }) {
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
          if (
            permissionStatus.state === "granted" ||
            permissionStatus.state === "prompt"
          ) {
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

  function LocateButton({ position }) {
    const map = useMap();

    const handleClick = () => {
      if (position) {
        map.flyTo(position, 13, { duration: 1.5 });
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

  function FlyToMarker({ lat, lng, name, alamat }) {
    const map = useMap();

    const handleClick = () => {
      map.flyTo([lat, lng], 17, { duration: 1.5 });
    };

    return (
      <Marker
        position={[lat, lng]}
        icon={serviceIcon}
        eventHandlers={{ click: handleClick }}
      >
        <Popup>
          <strong>{name}</strong>
          <br />
          {alamat}
        </Popup>
      </Marker>
    );
  }

  return (
    <section className="w-[90%] max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-[60px] mb-20">
      <div className="flex items-center justify-center">
        <div className="w-20 border-t border-biru"></div>
        <p className="mx-1 mb-1 text-sm font-black text-biru sm:text-sm">
          TOWING & BENGKEL
        </p>
        <div className="w-20 border-t border-biru"></div>
      </div>

      <h2 className="mb-4 text-lg font-bold text-center text-gray-800">
        Peta Persebaran Bengkel & Towing
      </h2>

      <div className="relative w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden mb-20">
        {position ? (
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={true}
            className="z-10 w-full h-full rounded-xl"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />

            {/* Marker lokasi user */}
            <Marker position={position} icon={currentLocationIcon}>
              <Popup>Lokasi Anda Sekarang</Popup>
            </Marker>
            <Circle
              center={position}
              radius={5000} // 5 kilometer
              pathOptions={{
                color: "red",
                fillColor: "#f87171",
                fillOpacity: 0.2,
              }}
            />

            {/* Marker dari data */}
            {Array.isArray(data) &&
              data.map((item) =>
                item.latitude && item.longitude ? (
                  <FlyToMarker
                    key={item.id}
                    lat={item.latitude}
                    lng={item.longitude}
                    name={item.bussiness_name}
                    alamat={item.address}
                  />
                ) : null
              )}

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
