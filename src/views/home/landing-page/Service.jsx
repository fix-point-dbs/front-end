import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkeletonCard from "./SkeletonCard";
import { Link } from "react-router-dom";
import { formatRupiah } from "../../../utils/FormatRupiah";
import {
  faMapMarkerAlt,
  faClock,
  faPhone,
  faCalendarAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Service({ data = [], isLoading }) {
  const [kategori, setKategori] = useState("Semua");

  console.log(kategori);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };
  const dataLayanan = data;
  const filteredData =
    kategori === "Semua"
      ? dataLayanan
      : dataLayanan.filter((item) => item.type === kategori);

  return (
    <>
      {!data.length && isLoading ? (
        <>
          <div id="service" className="absolute mt-[-50px] right-0 left-0 m-auto w-[100%] max-w-6xl z-20">
            <div className="px-4 py-4 bg-white shadow rounded-xl">
              <div className="flex flex-wrap items-center justify-between gap-y-3">
                <div className="flex gap-3 text-sm sm:text-base">
                  {["Semua", "workshop", "towing"].map((item) => (
                    <button
                      key={item}
                      onClick={() => setKategori(item)}
                      className={`px-4 py-1.5 rounded-md text-sm ${
                        kategori === item
                          ? "bg-oranye text-white font-bold"
                          : "border border-gray-300 text-gray-500 font-medium"
                      }`}
                    >
                      {item === "workshop" ? "Bengkel" : item === "towing" ? "Towing" : item}
                    </button>
                  ))}
                </div>
                <a
                  href="#"
                  className="hidden text-sm text-blue-600 sm:block sm:text-base"
                >
                  Lihat semua &rarr;
                </a>
              </div>
            </div>
          </div>
          <section className="w-[90%] max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-[60px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          </section>
        </>
      ) : (
        <>
          <div id="service" className="absolute mt-[-50px] right-0 left-0 m-auto w-[100%] max-w-6xl z-20">
            <div className="px-4 py-4 bg-white shadow rounded-xl">
              <div className="flex flex-wrap items-center justify-between gap-y-3">
                <div className="flex gap-3 text-sm sm:text-base">
                  {["Semua", "workshop", "towing"].map((item) => (
                    <button
                      key={item}
                      onClick={() => setKategori(item)}
                      className={`px-4 py-1.5 rounded-md text-sm ${
                        kategori === item
                          ? "bg-oranye text-white font-bold"
                          : "border border-gray-300 text-gray-500 font-medium"
                      }`}
                    >
                      {item === "workshop" ? "Bengkel" : item === "towing" ? "Towing" : item}
                    </button>
                  ))}
                </div>
                <Link to="/services" className="text-sm text-blue-600 sm:text-base">Lihat semua &rarr;</Link>

              </div>
            </div>
          </div>

          <section className="w-[90%] max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-[60px]">
            <div className="mx-auto max-w-7xl">
              <Slider {...settings}>
                {filteredData.map((item) => (
                  <div
                    key={item.id}
                    className="px-2 opacity-0 animate-fade-slide"
                  >
                    <div className="overflow-hidden bg-white shadow rounded-xl">
                      <img
                        src={`http://localhost:3000/uploads/photo-services/` + item.photos[0].url_photo}
                        alt={item.bussiness_name}
                        className="block object-cover w-full h-40 max-w-full rounded-t-xl"
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
                          {parseFloat(item.average_rating).toFixed(1)} / 5 • {item.type === "workshop" ? "Bengkel" : item.type=== "towing" ? "Towing" : item.type} •{" "}
                          {item.vehicle_type} •  {item.distance} km 
                        </p>
                        <p className="mt-1 font-medium text-green-500">
                          Rp.{formatRupiah(item.start_price_range)} - {formatRupiah(item.end_price_range)}
                        </p>
                        <div className="flex justify-between mt-4">
                          <button className="px-3 py-1 text-sm font-semibold text-white bg-red-500 rounded">
                            <FontAwesomeIcon
                              icon={faCalendarAlt}
                              className="mr-2 text-white"
                            />
                            Booking
                          </button>
                          <Link
                            to={`/service/detail/${item.id}`}
                            className="px-3 py-1 text-sm font-semibold border rounded text-biru border-biru"
                          >
                            Lihat Detail
                          </Link>
                        </div>
                        <h3 className="mt-4 text-sm font-semibold text-center text-biru">
                          Ringkasan
                        </h3>
                        <hr className="mt-2 mb-2 border-gray-300" />
                        <ul className="mb-2 space-y-3 text-sm text-black-700">
                          <li className="flex items-center space-x-4">
                            <FontAwesomeIcon
                              icon={faMapMarkerAlt}
                              className="text-biru"
                            />
                            <span>{item.address}</span>
                          </li>
                          <li className="flex items-center space-x-4">
                            <FontAwesomeIcon
                              icon={faClock}
                              className="text-green-600"
                            />
                            <span className="font-medium text-green-600">
                              {item.opening_time} - {item.closing_time}
                            </span>
                          </li>
                          <li className="flex items-center space-x-4">
                            <FontAwesomeIcon
                              icon={faPhone}
                              className="text-biru"
                            />
                            <span>{item.alternative_phone}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </section>
        </>
      )}
    </>
  );
}
