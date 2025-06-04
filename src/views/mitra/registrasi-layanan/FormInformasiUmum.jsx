import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faTools, faWrench } from "@fortawesome/free-solid-svg-icons";
import MotionDiv from "../../../utils/TransitionSmoth";
const FormInformasiUmum = ({
  formData,
  setFormData,
  handleChange,
  handleBack,
  handleNext,
}) => {
  const iconMap = {
    towing: faTruck,
    workshop: faTools,
    "Towing & Bengkel": faWrench,
  };

  return (
    <MotionDiv>
      <div className="flex-1 p-8 bg-white shadow-md rounded-xl">
        <h4 className="pb-2 mb-2 font-bold border-b text-md">
          Informasi Umum Layanan
        </h4>
        <div className="mb-4">
          <label className="text-sm font-bold text-black sm:text-base text-block">
            Jenis Layanan
          </label>
          <div className="flex flex-wrap gap-4 text-sm">
            {["workshop", "towing"].map((label, idx) => (
              <label
                key={idx}
                className={`flex items-center w-full gap-2 p-4 text-sm border rounded-md shadow-sm cursor-pointer 
      ${formData.type === label ? "border-blue-500 bg-blue-50" : "bg-gray-50"} 
      sm:w-auto`}
              >
                <input
                  type="radio"
                  name="type"
                  value={label}
                  checked={formData.type === label}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                  className="text-sm accent-biru"
                />
                <span className="flex items-center gap-1 text-sm">
                  <FontAwesomeIcon
                    icon={iconMap[label]}
                    className="text-biru"
                  />
                  {label == "workshop"
                    ? "Bengkel"
                    : label == "towing" && "Towing"}
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
            name="bussiness_name"
            value={formData.bussiness_name}
            onChange={(e) => handleChange(e)}
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
            name="year_founded"
            value={formData.year_founded}
            onChange={(e) => handleChange(e)}
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
              name="opening_time"
              value={formData.opening_time}
              onChange={(e) => handleChange(e)}
            />
            <span>-</span>
            <input
              type="time"
              className="p-2 text-sm border rounded-md"
              name="closing_time"
              value={formData.closing_time}
              onChange={(e) => handleChange(e)}
            />
            <label className="flex items-center gap-1 ml-4 text-sm text-gray-700">
              <input
                type="checkbox"
                className="text-sm accent-biru border rounded-md"
                name="full_operational"
                checked={formData.full_operational}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    full_operational: e.target.checked,
                    opening_time: e.target.checked
                      ? "00:00"
                      : formData.opening_time,
                    closing_time: e.target.checked
                      ? "23:59"
                      : formData.closing_time,
                  })
                }
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
            name="description"
            value={formData.description}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="flex justify-between">
          <button
            onClick={handleBack}
            className="px-6 py-2 text-sm font-bold text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Kembali
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-2 text-sm font-bold text-white rounded-md bg-biru hover:bg-blue-700"
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </MotionDiv>
  );
};

export default FormInformasiUmum;
