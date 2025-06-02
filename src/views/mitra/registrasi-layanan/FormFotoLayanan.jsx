import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FormFotoLayanan = ({ formData, setFormData, setStep }) => {
  const navigate = useNavigate();
  const [previewImages, setPreviewImages] = useState([]);

  useEffect(() => {
    return () => {
      previewImages.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);

    const updatedFiles = [...(formData.fotoLayanan || []), ...newFiles];
    setFormData((prev) => ({ ...prev, fotoLayanan: updatedFiles }));

    const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
    setPreviewImages((prev) => [...prev, ...newPreviews]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((formData.fotoLayanan?.length || 0) < 3) {
      alert("Upload minimal 3 foto terlebih dahulu.");
      return;
    }
    console.log("Data dikirim:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 p-8 bg-white shadow-md rounded-xl"
    >
      <h4 className="pb-2 mb-2 font-bold border-b text-md">Foto Layanan</h4>

      <div className="mb-4">
        <label className="block text-sm font-bold text-black sm:text-base">
          Upload Foto Layanan
        </label>
        <p className="mb-2 text-sm text-gray-500 sm:text-base">
          Silahkan upload foto beberapa kegiatan yang pernah anda lakukan atau
          dokumentasi kegiatan di layanan anda untuk meyakinkan para kostumer.
          Foto pertama akan dijadikan sebagai foto profil layanan anda, jadi
          upload semenarik mungkin loh
        </p>

        <div className="p-4 mb-4 text-center border border-blue-300 border-dashed rounded-lg bg-blue-50">
          <label htmlFor="foto-upload" className="cursor-pointer">
            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"
                />
              </svg>
              <p className="mt-2 text-sm text-blue-400">
                Upload <strong>minimal 3 foto</strong> dengan klik ikon di atas
                atau tarik dan letakkan file
                <br />
                <span className="text-xs text-gray-400">
                  (Resolusi: 400x400px min.)
                </span>
              </p>
            </div>
          </label>
          <input
            id="foto-upload"
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        {previewImages.length > 0 && (
          <div className="mb-4">
            <p className="mb-2 font-semibold">Preview Foto</p>
            <div className="grid grid-cols-3 gap-4">
              {previewImages.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Preview ${idx}`}
                  className="object-cover w-full h-40 rounded-lg shadow"
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={() => navigate("/registrasi/detail-layanan")}
          className="px-6 py-2 text-sm font-bold text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Kembali
        </button>

        <button
          type="submit"
          className={`px-6 py-2 text-white font-bold rounded-md ${
            (formData.fotoLayanan?.length || 0) >= 3
              ? "bg-red-600 hover:bg-red-700"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          disabled={(formData.fotoLayanan?.length || 0) < 3}
        >
          Kirim
        </button>
      </div>
    </form>
  );
};

export default FormFotoLayanan;
