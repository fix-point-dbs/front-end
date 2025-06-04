import React from "react";
import MotionDiv from "../../../utils/TransitionSmoth";
const FormDetailKontak = ({ formData, handleChange, handleNext }) => {
  return (
    <MotionDiv>
      <div className="flex-1 p-8 bg-white shadow-md rounded-xl">
        <h4 className="pb-2 mb-2 font-bold border-b text-md">Detail Kontak</h4>
        <div className="mb-4">
          <label className="mb-2 text-sm font-bold text-black sm:text-base text-block">
            Nama Penanggung Jawab
          </label>
          <input
            type="text"
            name="person_responsible"
            onChange={(e) => handleChange(e)}
            value={formData.person_responsible}
            className="w-full p-2 text-sm border rounded-md"
            placeholder="Nama Penanggung Jawab Layanan"
          />
        </div>

        <div className="mb-4 text-sm">
          <label className="mb-2 text-sm font-bold text-black sm:text-base text-block">
            Email
          </label>
          <input
            type="email"
            className="w-full p-2 text-sm border rounded-md"
            placeholder="abc@gmail.com"
          />
        </div>

        <div className="mb-4 text-sm">
          <label className="mb-2 text-sm font-bold text-black sm:text-base text-block">
            No Hp
          </label>
          <input type="text" className="w-full p-2 text-sm border rounded-md" />
        </div>

        <div className="mb-4 text-sm">
          <label className="mb-2 text-sm font-bold text-black sm:text-base text-block">
            No HP Layanan
          </label>
          <input
            type="text"
            name="alternative_phone"
            onChange={(e) => handleChange(e)}
            value={formData.alternative_phone}
            className="w-full p-2 text-sm border rounded-md"
          />
        </div>

        <div className="flex justify-end pt-4 space-x-4">
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

export default FormDetailKontak;
