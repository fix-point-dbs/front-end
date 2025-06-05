import React, { useState, useEffect } from "react";
import background from "../../assets/images/bg-white.png";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import StepCard from "../../views/mitra/registrasi-layanan/StepCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormDetailKontak from "../../views/mitra/registrasi-layanan/FormDetailKontak";
import FormDetailLayanan from "../../views/mitra/registrasi-layanan/FormDetailLayanan";
import FormFotoLayanan from "../../views/mitra/registrasi-layanan/FormFotoLayanan";
import FormInformasiUmum from "../../views/mitra/registrasi-layanan/FormInformasiUmum";
import { get, set, del } from "idb-keyval";
import { RegistrationMitraPresenter } from "../../presenters/mitra/RegistrationMitraPresenter";
import { getCurrentPosition } from "../../utils/GeoLocation";
import { useNavigate } from "react-router-dom";
import { showSuccessToast } from "../../utils/Toast";

export function RegistrationMitraPage() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [listService, setListService] = useState([]);
  const [position, setPosition] = useState(null);
  const [photo, setPhoto] = useState([]);
  const [formData, setFormData] = useState({
    user_id: 1,
    bussiness_name: "",
    person_responsible: "",
    description: "",
    address: "",
    postal_code: "",
    latitude: "",
    longitude: "",
    type: "",
    vehicle_type: "",
    start_price_range: "",
    end_price_range: "",
    year_founded: "",
    full_operational: true,
    opening_time: "",
    closing_time: "",
    alternative_phone: "",
    list_service_id: "",
    specialist_names: "",
  });

  const onSuccess = (id) => {
    showSuccessToast('Registrasi Layanan Berhasil');
    del('mitra-form-data');
    navigate(`/registrasi/review/${id}`);
  };

  const presenter = new RegistrationMitraPresenter({
    setListService,
    setFormData,
    onSuccess,
  });

  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();

    for (const key in formData) {
      if (key === "postal_code") {
        continue; 
      }
      if (key === "list_service_id" && Array.isArray(formData[key])) {
        data.append(key, formData[key].join(","));
      } else if (key === "photos" && Array.isArray(formData[key])) {
        formData[key].forEach((item) => data.append(key, item));
      } else {
        data.append(key, formData[key]);
      }
    }

    data.append("status", "pending");
    photo.forEach((file) => data.append("photos", file));

    presenter.addMitra(data);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const renderStep = () => {
    switch (activeStep) {
      case 1:
        return (
          <FormDetailKontak
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
          />
        );
      case 2:
        return (
          <FormInformasiUmum
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 3:
        return (
          <FormDetailLayanan
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
            handleNext={handleNext}
            handleBack={handleBack}
            listService={listService.data}
            position={position}
          />
        );
      case 4:
        return (
          <FormFotoLayanan
            photo={photo}
            setPhoto={setPhoto}
            handleSubmit={handleSubmit}
            handleBack={handleBack}
          />
        );
      default:
        return null;
    }
  };

  // Load from IndexedDB on mount
  useEffect(() => {
    presenter.loadListService();
    getCurrentPosition(
      (pos) => {
        const coords = [pos.coords.latitude, pos.coords.longitude];
        setPosition(coords);
        setFormData((prev) => ({
          ...prev,
          latitude: coords[0],
          longitude: coords[1],
        }));
        presenter.loadMap(coords[0], coords[1]);
      },
      (err) => {
        console.error("Gagal ambil lokasi", err);
        alert("Tidak bisa mengambil lokasi. Periksa pengaturan browser.");
      }
    );
    get("mitra-form-data").then((saved) => {
      if (saved) {
        setFormData(saved);
      }
    });
  }, []);

  useEffect(() => {
    set("mitra-form-data", formData);
  }, [formData]);

  return (
    <>
      <section className="w-[90%] max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-[60px] overflow-hidden bg-cover bg-center bg-no-repeat mb-10">
        <img
          src={background}
          alt="Hero background"
          className="absolute inset-0 z-0 object-cover w-full h-[300px] sm:h-[300px] lg:h-[300px]"
        />
        <div className="relative z-10 ">
          <h2 className="pt-20 mb-10 text-2xl font-bold text-center text-black sm:pt-20">
            Registrasi Layanan Pemesanan
          </h2>

          <div className="flex items-start w-full max-w-6xl p-5 mb-6 space-x-3 bg-white shadow-md rounded-xl">
            <div className="text-2xl">
              {" "}
              <FontAwesomeIcon icon={faBullhorn} className="mr-2 text-biru" />
            </div>
            <div>
              <p className="text-sm font-bold text-black sm:text-base">
                Selamat Datang Kembali!
              </p>
              <p className="text-xs text-gray-600 sm:text-sm">
                Silahkan daftarkan layanan anda pada form yang disediakan
                dibawah ini!
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full max-w-6xl gap-4 mb-10 md:flex-row">
            <StepCard activeStep={activeStep} />

            {renderStep()}
          </div>
        </div>
      </section>
    </>
  );
}
