import React, { useState, useEffect, useRef } from "react";
import background from "../../../../assets/images/bg-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faStar,
  faPhone,
  faTools,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getCurrentPosition } from "../../../../utils/GeoLocation";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import L from "leaflet";
import "leaflet-routing-machine";
import { currentLocationIcon, serviceIcon } from "../../../../utils/CustomIconMarker";

const Detail = ({ data = [], isLoading }) => {
  const service = data ?? [];
  const photos = service.photos ?? [];
  const [position, setPosition] = useState(null);
  const mapRef = useRef();
  const routingControlRef = useRef(null);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  console.log(service.latitude);
  console.log(service.longitude);
  console.log(position);
const userMarkerRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const settingsReview = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 5000,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  function routing() {
    if (position && service.latitude && service.longitude && mapRef.current) {

      if (routingControlRef.current) {
        mapRef.current.removeControl(routingControlRef.current);
      }
      routingControlRef.current = L.Routing.control({
        waypoints: [
          L.latLng(position[0], position[1]),
          L.latLng(service.latitude, service.longitude),
        ],
        lineOptions: {
          styles: [{ color: "blue", weight: 4 }],
        },
        show: false,
        addWaypoints: false,
        draggableWaypoints: false,
        routeWhileDragging: false,
        createMarker: () => null,
      })
        .on("routesfound", function (e) {
          const route = e.routes[0];
          const distance = (route.summary.totalDistance / 1000).toFixed(2); // in km
          const time = Math.ceil(route.summary.totalTime / 60); // in minutes
          setDistance(distance);
          setDuration(time);
        })
        .addTo(mapRef.current);
    }
  }

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

  function LocateButton({ position }) {
    const map = useMap();

    const handleClick = () => {
      if (position) {
        routing();
        map.flyTo(position, 15, { duration: 1.5 });
      
        if (userMarkerRef.current) {
          userMarkerRef.current.openPopup();
        }
      }
    };
    return (
      <button
        onClick={handleClick}
        className="absolute z-[1000] top-2 right-4 px-4 py-2 bg-biru text-white text-sm rounded shadow-md hover:bg-blue-700 transition"
      >
        Temukan lokasi dan rute
      </button>
    );
  }

  return (
    <section className="relative pb-10 overflow-hidden">
      <img
        src={background}
        alt="Hero background"
        className="absolute inset-0 object-cover w-full h-[270px] sm:h-[270px] lg:h-[270px] z-0"
      />
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex flex-col items-center justify-center h-[270px] text-center px-4"
      >
        <h2 className="pt-20 mb-2 text-2xl font-bold text-center text-black sm:pt-20">
          Detail Layanan
        </h2>
        <p className="mb-8 text-center text-black-600">
          Berikut merupakan informasi dari layanan terkait!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-biru drop-shadow-lg"
      >
        <div className="w-[90%] max-w-7xl mx-auto p-5 text-base text-white">
          Home / <span className="text-base text-white">Detail Layanan</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-[90%] max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-[20px] overflow-hidden bg-cover bg-center bg-no-repeat mb-10"
      >
        <div className="mb-6">
          <h1 className="mb-2 text-2xl font-bold text-black sm:text-3xl">
            Bengkel Andalan Motor
          </h1>
          <div className="flex flex-wrap gap-2 text-sm text-black sm:gap-4 sm:text-base">
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faTools} className="text-yellow-500" />
              <span className="whitespace-nowrap">Bengkel</span>
            </span>
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              <span className="whitespace-nowrap">4.7/5 (230 Ulasan)</span>
            </span>
          </div>
        </div>

        <Slider {...settings} className="mb-5">
          {photos.map((item) => (
            <div key={item.id} className="px-2">
              <div className="relative overflow-hidden transition duration-300 shadow group rounded-xl hover:shadow-lg">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.W6tCXjQK1qfdoMffVdTHzgHaE8&pid=Api&P=0&h=180"
                  alt={item.title}
                  className="object-cover w-full h-48"
                />
              </div>
            </div>
          ))}
        </Slider>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <section>
              <h2 className="mb-2 text-lg font-semibold text-black sm:text-xl md:text-2xl">
                Deskripsi Layanan
              </h2>
              <p className="text-sm text-gray-800 sm:text-base md:text-lg">
                Bengkel Andalan Motor adalah solusi tepat untuk perbaikan dan
                perawatan kendaraan Anda. Kami melayani servis rutin, perbaikan
                mesin, ganti oli, hingga pengecekan menyeluruh. Dikerjakan oleh
                teknisi profesional dan berpengalaman.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-black sm:text-xl md:text-2xl">
                Keahlian
              </h2>
              <ul className="ml-5 space-y-1 text-sm text-gray-800 list-disc sm:text-base md:text-lg">
                <li>Servis Mesin</li>
                <li>Ganti Oli & Tune Up</li>
                <li>Perbaikan Kelistrikan</li>
                <li>Servis Rutin Motor Matic & Manual</li>
              </ul>
            </section>

            <div className="flex border-t-2 pt-5 justify-between items-center ">
              <h2 className=" text-xl font-semibold text-black">Lokasi</h2>
              <div className="flex gap-4">

                  <p className="font-semibold text-center">
                    Jarak: {distance ? `${distance} km` : "Tekan Button"}
                  </p>
                  <p className="font-semibold text-center">
                    Waktu: {duration ? `${duration} menit` : "Tekan Button"}
                  </p>
              </div>
            </div>
            {position ? (
              <MapContainer
                center={position}
                zoom={12}
                scrollWheelZoom={false}
                className="w-full h-80 rounded-lg z-0"
                ref={mapRef}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {service.latitude && service.longitude ? (
                  <Marker position={[service.latitude, service.longitude]} icon={serviceIcon} >
                    <Popup>
                      Bengkel Andalan Motor <br /> Jl. Mekar Jaya No. 10,
                      Bandung
                    </Popup>
                  </Marker>
                ) : null}

                <LocateButton position={position} />
                {position && (
                  <Marker position={position} icon={currentLocationIcon} ref={userMarkerRef}>
                    <Popup>Lokasi Saya</Popup>
                  </Marker>
                )}
              </MapContainer>
            ) : (
              <p className="mt-10 text-center text-gray-500 font">
                Mengambil lokasi...
              </p>
            )}
            <section className="border-t-2 pt-5">
              <div className="flex justify-between items-center mb-3">
                <h2 className="mb-2 text-xl font-semibold text-black">
                  Ulasan Pengguna
                </h2>
                <div className="flex gap-4">
                  <h2>
                    <span className="font-bold text-[30px] mr-1">4,3</span>
                    <span className="text-slate-500 font-bold ">/5</span>
                  </h2>
                  <div>
                    <p className="font-bold text-[22px] text-center">Bagus</p>
                    <p className="text-[15px] font-semibold text-slate-500">
                      Dari <span className="text-biru font-extrabold">20</span>{" "}
                      Reviews
                    </p>
                  </div>
                </div>
              </div>

              <Slider {...settingsReview} className="mb-5">
                {photos.map((item) => (
                  <div key={item.id} className="px-2">
                    <div className="relative overflow-hidden transition p-5 duration-300 shadow group rounded-xl hover:shadow-lg">
                      <div className="flex justify-between">
                        <h1>Nama pengguna</h1>
                        <p>
                          <FontAwesomeIcon
                            icon={faStar}
                            className="text-yellow-500"
                          />
                          <span className="font-bold ml-2 text-[19px]">
                            5,0/
                          </span>{" "}
                          <span className="text-[14px]">5</span>
                        </p>
                      </div>
                      <p className="mt-3 text-slate-700 text-[15px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio modi, exercitationem corrupti quod hic fuga .
                      </p>
                      <small className="mt-3 inline-block text-biru">
                        <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                        13 Mei 2025
                      </small>
                    </div>
                  </div>
                ))}
              </Slider>
            </section>
          </div>

          <div className="space-y-4">
            <div className="p-6 text-black bg-yellow-400 shadow-lg rounded-xl">
              <h3 className="mb-2 text-xl font-bold">
                Butuh Bantuan Sekarang?
              </h3>
              <p className="mb-4 text-sm">
                Hubungi kami untuk booking atau konsultasi langsung dengan
                teknisi.
              </p>
              <a
                href={`/pemesanan`}
                className="flex items-center justify-center w-full px-4 py-2 mb-2 text-white transition bg-red-600 rounded hover:bg-red-700"
              >
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                Pesan Sekarang
              </a>
            </div>

            <div className="p-4 text-sm text-black bg-gray-200 rounded-lg">
              <p>
                <strong>Alamat:</strong> Jl. Mekar Jaya No. 10, Bandung
              </p>
              <p>
                <strong>Jam Buka:</strong> 08:00 - 17:00 WIB
              </p>
              <p>
                <strong>No. Telepon:</strong> +62 812-3456-789
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Detail;
