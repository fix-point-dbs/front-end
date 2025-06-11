import React, { useState, useEffect, useRef } from "react";
import background from "../../../../assets/images/bg-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatRupiah } from "../../../../utils/FormatRupiah";
import { formatTanggal, formatJam } from "../../../../utils/FormatDateTime";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  faStar,
  faPhone,
  faTools,
  faCalendar,
  faClock,
  faToolbox,
  faMoneyBill,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import MotionDiv from "../../../../utils/TransitionSmoth";
import "leaflet/dist/leaflet.css";
import Slider from "react-slick";
import { getCurrentPosition } from "../../../../utils/GeoLocation";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import L from "leaflet";
import "leaflet-routing-machine";
import {
  currentLocationIcon,
  serviceIcon,
} from "../../../../utils/CustomIconMarker";

const Detail = ({ data = [], isLoading }) => {
  const service = data ?? [];
  const photos = service.photos ?? [];
  const detailService = service.detail_services ?? [];
  const specialist = service.specialists ?? [];
  const review = service.reviews ?? [];
  const [position, setPosition] = useState(null);
  const mapRef = useRef();
  const routingControlRef = useRef(null);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  console.log(service.latitude);
  console.log(service.longitude);
  console.log(service);
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

  function cekReview() {
    const rating = parseFloat(service.average_rating);
    if (isNaN(rating) || rating <= 0) {
      return "Belum ada ulasan";
    } else if (rating >= 3.5) {
      return "Bagus";
    } else if (rating >= 2.5) {
      return "Cukup";
    } else {
      return "Buruk";
    }
  }

  return (
    <MotionDiv>
    <section className="relative pb-10 overflow-hidden">
      <img
        src={background}
        alt="Hero background"
        className="absolute inset-0 object-cover w-full h-[270px] sm:h-[270px] lg:h-[270px] z-0"
      />
      <div
        className="relative z-10 flex flex-col items-center justify-center h-[270px] text-center px-4"
      >
        <h2 className="pt-20 mb-2 text-2xl font-bold text-center text-black sm:pt-20">
          Detail Layanan
        </h2>
        <p className="mb-8 text-center text-black-600">
          Berikut merupakan informasi dari layanan terkait!
        </p>
      </div>

      <div
        className="bg-biru drop-shadow-lg"
      >
        <div className="w-[90%] max-w-7xl mx-auto p-5 text-base text-white">
          Home / <span className="text-base text-white">Detail Layanan</span>
        </div>
      </div>

      <div
        className="w-[90%] max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-[20px] overflow-hidden bg-cover bg-center bg-no-repeat mb-10"
      >
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 text-sm text-black sm:gap-4 sm:text-base">
            {isLoading ? (
              <Skeleton width={90} height={35} />
            ) : (
              <span className="flex items-center bg-biru px-4 py-1 text-white rounded-full gap-1">
                <FontAwesomeIcon icon={faTools} className="text-yellow-500" />
                <span className="whitespace-nowrap">{service.type}</span>
              </span>
            )}
            {isLoading ? (
              <Skeleton width={90} height={35} />
            ) : (
              <span className="flex items-center border border-yellow-400 px-4 py-1 rounded-full gap-1">
                <FontAwesomeIcon icon={faToolbox} className="text-biru" />
                <span className="whitespace-nowrap">
                  {service.vehicle_type}
                </span>
              </span>
            )}
            {isLoading ? (
              <Skeleton width={90} height={35} />
            ) : (
              <span className="flex items-center">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-yellow-500 mr-1"
                />
                <span className="whitespace-nowrap font-bold text-[25px]">
                  {parseFloat(service.average_rating)}
                </span>
                /5 dari {parseFloat(service.review_count)} ulasan
              </span>
            )}
          </div>
          <h1 className="mb-2 text-2xl mt-2 font-bold text-black sm:text-3xl">
            {isLoading ? <Skeleton width={200} /> : service.bussiness_name}
          </h1>

          {isLoading ? (
            <Skeleton width={800} height={25} />
          ) : (
            <div className="flex flex-wrap gap-2 text-sm text-black sm:gap-4 sm:text-base">
              <span className="flex items-center gap-1">
                <FontAwesomeIcon icon={faClock} className="text-biru" />
                <span className="whitespace-nowrap">
                  {formatJam(service.opening_time)} -{" "}
                  {formatJam(service.closing_time)}
                </span>
              </span>

              <span className="flex items-center gap-1">
                <FontAwesomeIcon icon={faMoneyBill} className="text-biru" />
                <span className="whitespace-nowrap">
                  {formatRupiah(service.start_price_range)} -{" "}
                  {formatRupiah(service.end_price_range)}
                </span>
              </span>
              <span className="flex items-center gap-1">
                <FontAwesomeIcon icon={faPhone} className="text-biru" />
                <span className="whitespace-nowrap">
                  {service.alternative_phone}
                </span>
              </span>
              <span className="flex items-center gap-1">
                <FontAwesomeIcon icon={faLocation} className="text-biru" />
                <span className="whitespace-nowrap">{service.address}</span>
              </span>
            </div>
          )}
        </div>

        <Slider {...settings} className="mb-5">
          {isLoading
            ? Array(3)
                .fill()
                .map((_, i) => (
                  <div key={i} className="px-2">
                    <Skeleton height={192} />
                  </div>
                ))
            : photos.map((item) => (
                <div key={item.id} className="px-2">
                  <div className="relative overflow-hidden transition duration-300 shadow group rounded-xl hover:shadow-lg">
                    <img
                      src={`${
                        import.meta.env.VITE_BASE_URL
                      }/uploads/photo-services/${item.url_photo}`}
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
                {isLoading ? <Skeleton count={3} /> : service.description}
              </p>

              <div className="flex justify-between flex-col md:flex-row mt-3">
                <div className="w-100 md:w-1/2">
                  <h2 className="mb-2 text-lg font-semibold text-black sm:text-xl md:text-xl">
                    Detail Layanan
                  </h2>
                  <ul className="ml-5 space-y-1 text-sm text-gray-800 list-disc sm:text-base md:text-lg">
                    {isLoading
                      ? Array.from({ length: 3 }).map((_, index) => (
                          <li key={index}>
                            <Skeleton width={120} /> {/* untuk item.type */}
                            <Skeleton
                              width={`80%`}
                              style={{ marginTop: 4 }}
                            />{" "}
                            {/* untuk item.description */}
                          </li>
                        ))
                      : detailService.map((item, index) => (
                          <li key={index}>
                            {item.list_service?.type} <br />
                            <span className="text-slate-600 text-[15px]">
                              {item.list_service?.description}
                            </span>
                          </li>
                        ))}
                  </ul>
                </div>
                <div className="w-100 md:w-1/2">
                  <h2 className="mb-2 text-lg font-semibold text-black sm:text-xl md:text-xl">
                    Spesialis
                  </h2>
                  <ul className="ml-5 space-y-1 text-sm text-gray-800 list-disc sm:text-base md:text-lg">
                    {isLoading
                      ? Array.from({ length: 3 }).map((_, index) => (
                          <li key={index}>
                            <Skeleton width={120} /> {/* untuk item.type */}
                            <Skeleton
                              width={`80%`}
                              style={{ marginTop: 4 }}
                            />{" "}
                            {/* untuk item.description */}
                          </li>
                        ))
                      : specialist.map((item) => (
                          <li>
                            {item.name} <br />
                            <span className="text-slate-600 text-[15px]">
                              {item.description}
                            </span>
                          </li>
                        ))}
                  </ul>
                </div>
              </div>
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
            {position && !isLoading ? (
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
                  <Marker
                    position={[service.latitude, service.longitude]}
                    icon={serviceIcon}
                  >
                    <Popup>
                      Bengkel Andalan Motor <br /> Jl. Mekar Jaya No. 10,
                      Bandung
                    </Popup>
                  </Marker>
                ) : null}

                <LocateButton position={position} />
                {position && (
                  <Marker
                    position={position}
                    icon={currentLocationIcon}
                    ref={userMarkerRef}
                  >
                    <Popup>Lokasi Saya</Popup>
                  </Marker>
                )}
              </MapContainer>
            ) : (
              <div className="w-full border bg-gray-200 h-80 rounded-lg z-0">
                <p className="mt-10 text-center text-gray-900 font">
                  Mengambil lokasi... <br />
                  Aktifkan Permission!!!
                </p>
              </div>
            )}
            <section className="border-t-2 pt-5">
              <div className="flex justify-between items-center mb-3">
                <h2 className="mb-2 text-xl font-semibold text-black">
                  Ulasan Pengguna
                </h2>
                {isLoading ? (
                  <Skeleton width={200} height={50} />
                ) : (
                  <div className="flex gap-4">
                    <h2>
                      <span className="font-bold text-[30px] mr-1">
                        {parseFloat(service.average_rating)}
                      </span>
                      <span className="text-slate-500 font-bold ">/5</span>
                    </h2>
                    <div>
                      <p className="font-bold text-[22px] text-center">
                        {cekReview()}
                      </p>
                      <p className="text-[15px] font-semibold text-slate-500">
                        Dari{" "}
                        <span className="text-biru font-extrabold">
                          {service.review_count}
                        </span>{" "}
                        Reviews
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <Slider {...settingsReview} className="mb-5">
                {isLoading
                  ? Array.from({ length: 3 }).map((_, index) => (
                      <div key={index} className="px-2">
                        <div className="relative overflow-hidden transition p-5 duration-300 shadow group rounded-xl">
                          <div className="flex justify-between">
                            <Skeleton width={100} height={20} />
                            <div className="flex items-center space-x-2">
                              <Skeleton circle width={20} height={20} />
                              <Skeleton width={40} height={20} />
                              <Skeleton width={20} height={15} />
                            </div>
                          </div>
                          <Skeleton count={2} className="mt-3" />
                          <Skeleton width={100} height={14} className="mt-4" />
                        </div>
                      </div>
                    ))
                  : review.map((item) => (
                      <div key={item.id} className="px-2">
                        <div className="relative overflow-hidden transition p-5 duration-300 shadow group rounded-xl hover:shadow-lg">
                          <div className="flex justify-between">
                            <h1>{item.user.name}</h1>
                            <p>
                              <FontAwesomeIcon
                                icon={faStar}
                                className="text-yellow-500"
                              />
                              <span className="font-bold ml-2 text-[19px]">
                                {item.rating}/
                              </span>
                              <span className="text-[14px]">5</span>
                            </p>
                          </div>
                          <p className="mt-3 text-slate-700 text-[15px]">
                            {item.review}
                          </p>
                          <small className="mt-3 inline-block text-biru">
                            <FontAwesomeIcon
                              icon={faCalendar}
                              className="mr-2"
                            />
                            {formatTanggal(item.createdAt)}
                          </small>
                        </div>
                      </div>
                    ))}
              </Slider>
            </section>
          </div>

          {isLoading ? (
            <Skeleton width={`100%`} height={300} />
          ) : (
            <div className="space-y-4">
              <div className="p-6 text-black bg-yellow-400 shadow-lg rounded-xl">
                <h3 className="mb-2 text-xl font-bold">
                  Butuh Bantuan Sekarang?
                </h3>
                <p className="mb-2 text-sm">
                  Hubungi kami untuk booking atau konsultasi langsung dengan
                  teknisi.
                </p>
                <p className="text-[15px]">
                  <strong>Alamat:</strong> {service.address}
                </p>
                <p className="text-[15px]">
                  <strong>Jam Buka:</strong> {formatJam(service.opening_time)} -{" "}
                  {formatJam(service.closing_time)}
                </p>
                <p className="text-[15px] mb-2">
                  <strong>No. Telepon:</strong> {service.alternative_phone}
                </p>
                <Link
                  to={`/booking/${service.id}`}
                  className="flex items-center justify-center w-full px-4 py-2 text-white transition bg-red-600 rounded hover:bg-red-700"
                >
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  Pesan Sekarang
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
    </MotionDiv>
  );
};

export default Detail;
