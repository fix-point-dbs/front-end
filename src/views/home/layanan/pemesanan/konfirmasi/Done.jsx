import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import background from "../../../../../assets/images/bg-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import StarRating from "../../../components/StarRating";
import { showSuccessToast } from "../../../../../utils/Toast";
import { useNavigate } from "react-router-dom";
const Done = ({ data, isLoading, onSubmit}) => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewData = {
      rating: rating,
      review: review,
    };
    onSubmit(reviewData);
  };

  const handleDone = () => {
    showSuccessToast("Terimakasih telah menggunakan layanan kami");
    navigate("/");
  };

  return (
    <section className="w-[90%] max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-[60px] overflow-hidden bg-cover bg-center bg-no-repeat mb-10">
      <img
        src={background}
        alt="Hero background"
        className="absolute inset-0 z-0 object-cover w-full h-[300px] sm:h-[300px] lg:h-[300px]"
      />
      <div className="relative z-10">
        <div>
          <h2 className="pt-20 mb-2 text-2xl font-bold text-center text-black sm:pt-20">
            Konfirmasi Pemesanan
          </h2>
          <p className="mb-8 text-center text-black-600">
            Silahkan pantau dashboard untuk melihat pesanan anda!
          </p>
          </div>

        <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto mb-10 md:grid-cols-4">
          <div className="col-span-1 space-y-4">
            <div className="p-4 bg-white shadow-md rounded-xl h-fit">
              <h2 className="mb-6 text-base font-bold text-gray-800">
                Konfirmasi Pesanan
              </h2>
              <div className="relative ml-6 border-l-2 border-gray-200">
                {["Menunggu", "Diterima", "Dalam Perjalanan", "Selesai"].map(
                  (step, i) => (
                    <div
                      key={i}
                      className="relative flex items-center mb-10 space-x-4"
                    >
                      <div className="absolute -left-6">
                        {i === 3 ? (
                          <>
                            <span className="absolute inline-flex w-8 h-8 bg-blue-400 rounded-full opacity-75 animate-ping"></span>
                            <span className="relative flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-blue-700 rounded-full">
                              {i + 1}
                            </span>
                          </>
                        ) : (
                          <span className="flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-blue-700 rounded-full">
                            {i + 1}
                          </span>
                        )}
                      </div>
                      <span className="text-sm font-semibold text-blue-700">
                        {step}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="col-span-1 space-y-4 md:col-span-3">
            <div className="p-4 text-white rounded-md shadow-sm bg-oranye">
              <p>
                <FontAwesomeIcon
                  icon={faBullhorn}
                  className="mr-2 text-white"
                />
                <strong>Terimakasih!</strong> Pesanan anda dengan nomor {""}
                <span className="font-semibold text-black">
                  {data.id}
                </span>{" "}
                telah <strong>Selesai</strong>. Harap beri ulasan anda yah!
              </p>
            </div>

            <div className="p-4 bg-white border rounded-md shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{data.service?.bussiness_name}</h3>
                <span className="text-sm text-green-600">Buka 24 jam</span>
              </div>
              <p className="text-sm text-gray-700">
                Terima kasih telah menggunakan layanan kami. Silahkan beri ulasan anda untuk perbaikan pelayanan kami.
              </p>
            </div>

            <div className="p-4 space-y-4 border rounded-md shadow-sm bg-gray-50">
              <form onSubmit={handleSubmit}>
              <h4 className="pb-2 font-semibold border-b text-md">
                Bagaimana pelayanan yang dilakukan?
              </h4>

              <div className="space-y-3">
                <label className="block text-sm font-bold text-gray-700">
                  Penilaian:
                </label>
                <StarRating onChange={setRating} />

                <label className="block text-sm font-bold text-gray-700">
                  Ulasan:
                </label>
                <textarea
                  rows="4"
                  placeholder="Tulis pengalaman anda..."
                  className="w-full p-2 border rounded-md resize-none focus:outline-none focus:ring focus:border-blue-300"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                ></textarea>

                {isLoading ? (
                  <button
                    disabled
                    className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                    type="submit"
                  >
                    <span className="inline-block w-4 h-4 mr-2 border-2 border-t-2 border-gray-300 border-t-gray-800 rounded-full animate-spin align-middle" />
                    Sedang Mengirim
                  </button>
                ) : (
                  <button
                    className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                    type="submit"
                  >
                    Kirim
                  </button>
                )}
              </div>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-4 text-right">
          <button onClick={handleDone} className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-600">
            Selesai
          </button>
        </div>
      </div>
    </section>
  );
};

export default Done;
