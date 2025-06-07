import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faClock,
  faCalendarAlt,
  faRuler,
  faStar,
  faClose,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import background from "../../../assets/images/bg-white.png";
import { getCurrentPosition } from "../../../utils/GeoLocation";
import L from "leaflet";
import { currentLocationIcon, serviceIcon } from "../../../utils/CustomIconMarker";
export default function FilterLayanan({ services }) {
  const [selectedJenis, setSelectedJenis] = useState([]);
  const [selectedKendaraan, setSelectedKendaraan] = useState([]);
  const [selectedRating, setSelectedRating] = useState([]);
  const [hoveredService, setHoveredService] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  function MapAutoCenter({ position, popupText }) {
    const map = useMap();

    useEffect(() => {
      if (position) {
        map.setView(
          position,
          13,
          { duration: 2000 },
          { animate: true },
          {
            noMoveStart: true,
          }
        );
        L.popup()
          .setLatLng(position)
          .setContent(popupText || "Lokasi Terkini")
          .openOn(map);
      }
    }, [position]);

    return null;
  }

  const handleCheckboxChange = (value, selected, setSelected) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const filteredData = services?.filter((item) => {
    const jenisLabel = item.type === "workshop" ? "Bengkel" : "Towing";
    const ratingValue = Math.floor(parseFloat(item.average_rating || 0));

    const matchJenis =
      selectedJenis.length === 0 || selectedJenis.includes(jenisLabel);

    const matchKendaraan =
      selectedKendaraan.length === 0 ||
      selectedKendaraan.includes(item.vehicle_type);

    const matchRating =
      selectedRating.length === 0 || selectedRating.includes(ratingValue);

    return matchJenis && matchKendaraan && matchRating;
  });

  const [center, setCenter] = useState({});
  const [position, setPosition] = useState();
  useEffect(() => {
    getCurrentPosition(
      (pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
        setCenter({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      (err) => {
        console.error("Gagal ambil lokasi", err);
        alert("Tidak bisa mengambil lokasi. Periksa pengaturan browser.");
      }
    );
  }, []);

  return (
    <section className="relative pb-10">
      <img
        src={background}
        alt="Hero background"
        className="absolute inset-0 z-0 object-cover w-full h-[240px]"
      />

      <div className="relative z-10 px-4 mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <div className="relative z-10 flex flex-col items-center justify-center h-[240px] text-center px-4">
            <h2 className="pt-20 mb-2 text-2xl font-bold text-black">
              Daftar Bengkel
            </h2>
            <p className="mb-8 text-black-600">
              Pilih bengkel terdekat dari lokasi Anda
            </p>
          </div>
        </div>

        {/* Toggle Button di Mobile */}
        <div className="md:hidden mb-4 flex">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium"
            onClick={() => setShowFilter(!showFilter)}
          >
            {showFilter ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faBars} />}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Sidebar Filter */}
          <div
            className={`${
              showFilter ? "block" : "hidden"
            } md:block max-h-[90vh] overflow-y-auto bg-white border p-5 rounded-lg md:sticky md:top-24`}
          >
            {position && (
              <MapContainer
                center={position}
                zoom={7}
                scrollWheelZoom={false}
                style={{ height: "250px", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker
                  position={position}
                  icon={currentLocationIcon}
                ></Marker>

                {filteredData?.map((item) => (
                  <Marker
                    key={item.id}
                    icon={serviceIcon}
                    position={[
                      parseFloat(item.latitude),
                      parseFloat(item.longitude),
                    ]}
                    eventHandlers={{
                      mouseover: () => {
                        setHoveredService(item);
                      },
                      mouseout: () => {
                        setHoveredService(null);
                      },
                    }}
                  >
                    <Popup>{item.bussiness_name}</Popup>
                  </Marker>
                ))}

                {hoveredService && (
                  <>
                    <Marker
                      position={[
                        parseFloat(hoveredService.latitude),
                        parseFloat(hoveredService.longitude),
                      ]}
                      icon={serviceIcon}
                    >
                      <Popup>{hoveredService.bussiness_name}</Popup>
                    </Marker>
                    <MapAutoCenter
                      position={[
                        parseFloat(hoveredService.latitude),
                        parseFloat(hoveredService.longitude),
                      ]}
                      popupText={hoveredService.bussiness_name}
                    />
                  </>
                )}
              </MapContainer>
            )}

            {/* Filter */}
            <div className="flex flex-col mt-3 gap-2">
              <h3 className="text-sm font-bold text-black">Jenis Layanan</h3>
              {["Bengkel", "Towing"].map((jenis) => (
                <div key={jenis} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    onChange={() =>
                      handleCheckboxChange(
                        jenis,
                        selectedJenis,
                        setSelectedJenis
                      )
                    }
                    checked={selectedJenis.includes(jenis)}
                    className="rounded border"
                  />
                  <label className="text-sm">{jenis}</label>
                </div>
              ))}

              <h3 className="text-sm font-bold text-black">Jenis Kendaraan</h3>
              {["Mobil", "Sepeda Motor"].map((kendaraan) => (
                <div key={kendaraan} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    onChange={() =>
                      handleCheckboxChange(
                        kendaraan,
                        selectedKendaraan,
                        setSelectedKendaraan
                      )
                    }
                    checked={selectedKendaraan.includes(kendaraan)}
                    className="rounded border"
                  />
                  <label className="text-sm">{kendaraan}</label>
                </div>
              ))}

              <h3 className="text-sm font-bold text-black">Rating</h3>
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    onChange={() =>
                      handleCheckboxChange(
                        star,
                        selectedRating,
                        setSelectedRating
                      )
                    }
                    checked={selectedRating.includes(star)}
                    className="rounded border"
                  />
                  <label className="text-sm text-yellow-400">
                    {Array.from({ length: star }).map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} />
                    ))}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Konten Bengkel */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredData?.length === 0 ? (
              <p className="text-sm italic text-center text-gray-600 col-span-full">
                Tidak ada bengkel tersedia untuk filter tersebut.
              </p>
            ) : (
              filteredData?.map((item) => (
                <div
                  key={item.id}
                  className="overflow-hidden bg-white shadow rounded-xl"
                  onMouseEnter={() => setHoveredService(item)}
                  onMouseLeave={() => setHoveredService(center)}
                >
                  <img
                    src={
                      `http://localhost:3000/uploads/photo-services/` +
                      item.photos[0].url_photo
                    }
                    alt={item.photos[0].url_photo}
                    className="block object-cover w-full h-40 rounded-t-xl"
                  />
                  <div className="p-4 min-h-[350px] flex flex-col justify-between">
                    <h2 className="mb-0 text-lg font-bold">
                      {item.bussiness_name}
                    </h2>
                    <p className="mt-0 text-sm text-gray-500">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="mr-2 text-yellow-400"
                      />
                      {parseFloat(item.average_rating).toFixed(1)} / 5 •{" "}
                      {item.type === "workshop" ? "Bengkel" : "Towing"}
                    </p>
                    <p className="mt-1 font-medium text-green-500">
                      Rp{item.start_price_range.toLocaleString()} - Rp
                      {item.end_price_range.toLocaleString()}
                    </p>
                    <div className="flex justify-between mt-4">
                      <a href="/pemesanan">
                        <button className="px-3 py-1 text-sm font-semibold text-white bg-red-500 rounded">
                          <FontAwesomeIcon
                            icon={faCalendarAlt}
                            className="mr-2"
                          />
                          Booking
                        </button>
                      </a>
                      <a href="/bengkel/detail">
                        <button className="px-3 py-1 text-sm font-semibold border rounded text-blue-600 border-blue-600">
                          Lihat Detail
                        </button>
                      </a>
                    </div>
                    <h3 className="mt-4 text-sm font-semibold text-center text-blue-600">
                      Ringkasan
                    </h3>
                    <hr className="mt-2 mb-2 border-gray-300" />
                    <ul className="mb-2 space-y-3 text-sm">
                      <li className="flex items-center space-x-4">
                        <FontAwesomeIcon
                          icon={faMapMarkerAlt}
                          className="text-blue-600"
                        />
                        <span>{item.address}</span>
                      </li>
                      <li className="flex items-center space-x-4">
                        <FontAwesomeIcon
                          icon={faClock}
                          className="text-green-600"
                        />
                        <span className="font-medium text-green-600">
                          {item.opening_time?.slice(0, 5)} -{" "}
                          {item.closing_time?.slice(0, 5)}
                        </span>
                      </li>
                      <li className="flex items-center space-x-4">
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="text-blue-600"
                        />
                        <span>{item.alternative_phone}</span>
                      </li>
                      <li className="flex items-center space-x-4">
                        <FontAwesomeIcon
                          icon={faRuler}
                          className="text-blue-600"
                        />
                        <span>{item.distance ?? "-"} km</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
