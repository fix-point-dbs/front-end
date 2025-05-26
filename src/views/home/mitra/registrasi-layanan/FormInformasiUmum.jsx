import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faTools, faWrench } from "@fortawesome/free-solid-svg-icons";

const FormInformasiUmum = () => {
  const navigate = useNavigate();
  const iconMap = {
    Towing: faTruck,
    Bengkel: faTools,
    "Towing & Bengkel": faWrench,
  };
  const [is24Jam, setIs24Jam] = useState(false);
  const [jamBuka, setJamBuka] = useState("");
  const [jamTutup, setJamTutup] = useState("");

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIs24Jam(checked);
    if (checked) {
      setJamBuka("00:00");
      setJamTutup("23:59");
    }
  };

  const handleTimeChange = (setter) => (e) => {
    setIs24Jam(false);
    setter(e.target.value);
  };

  return (
    <div className="flex-1 p-8 bg-white shadow-md rounded-xl">
      <h4 className="pb-2 mb-2 font-bold border-b text-md">
        Informasi Umum Layanan
      </h4>
      <div className="mb-4">
        <label className="text-sm font-bold text-black sm:text-base text-block">
          Jenis Layanan
        </label>
        <div className="flex flex-wrap gap-4 text-sm">
          {["Towing", "Bengkel", "Towing & Bengkel"].map((label, idx) => (
            <label
              key={idx}
              className="flex items-center w-full gap-2 p-4 text-sm border rounded-md shadow-sm cursor-pointer bg-gray-50 hover:border-blue-500 sm:w-auto"
            >
              <input type="radio" name="jenisLayanan" className="text-sm accent-biru" />
              <span className="flex items-center gap-1 text-sm">
                <FontAwesomeIcon icon={iconMap[label]} className="text-biru" />
                {label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="text-sm font-bold text-black sm:text-base text-block">
          Nama Layanan
        </label>
        <p className="mb-2 text-sm text-gray-500 sm:text-base">
          Buatlah nama yang menarik dan bisa menggambarkan layanan Anda.
        </p>
        <input
          type="text"
          className="w-full p-2 text-sm border rounded-md"
          placeholder="Nama layanan Anda"
        />
      </div>

      <div className="mb-4 text-sm">
        <label className="text-sm font-bold text-black sm:text-base text-block">
          Tahun Berdiri Layanan
        </label>
        <p className="mb-2 text-sm text-gray-500 sm:text-base">
          Masukkan tahun kapan layanan anda didirikan.
        </p>
        <input
          type="number"
          className="w-full p-2 text-sm border rounded-md"
          placeholder="Contoh: 2020"
        />
      </div>

      <div className="mb-4 text-sm">
        <label className="text-sm font-bold text-black sm:text-base text-block">
          Jam Operasional
        </label>
        <p className="mb-2 text-sm text-gray-500 sm:text-base">
          Masukkan informasi dengan benar.
        </p>
        <div className="flex items-center gap-2">
          <input
            type="time"
            className="p-2 text-sm border rounded-md"
            value={jamBuka}
            onChange={handleTimeChange(setJamBuka)}
            disabled={is24Jam}
          />
          <span>-</span>
          <input
            type="time"
            className="p-2 text-sm border rounded-md"
            value={jamTutup}
            onChange={handleTimeChange(setJamTutup)}
            disabled={is24Jam}
          />
          <label className="flex items-center gap-1 ml-4 text-sm text-gray-700">
            <input
              type="checkbox"
              className="text-sm accent-biru"
              checked={is24Jam}
              onChange={handleCheckboxChange}
            />
            24 Jam
          </label>
        </div>
      </div>

      <div className="mb-4 text-sm">
        <label className="text-sm font-bold text-black sm:text-base text-block">
          Deskripsi Singkat Layanan
        </label>
        <textarea
          rows="4"
          className="w-full p-2 text-sm border rounded-md"
          placeholder="Masukkan deskripsi singkat"
        ></textarea>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => navigate("/registrasi/data-diri")}
          className="px-6 py-2 text-sm font-bold text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Kembali
        </button>
        <button
          onClick={() => navigate("/registrasi/detail-layanan")}
          className="px-6 py-2 text-sm font-bold text-white rounded-md bg-biru hover:bg-blue-700"
        >
          Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default FormInformasiUmum;
