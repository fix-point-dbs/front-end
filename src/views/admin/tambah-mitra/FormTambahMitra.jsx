import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function FormTambahMitra() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama: "",
    alamat: "",
    noTelp: "",
    layanan: "",
    status: "Aktif",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data yang disimpan:", formData);
    setFormData({
      nama: "",
      alamat: "",
      noTelp: "",
      layanan: "",
      status: "Aktif",
    });
    navigate("/admin/pengajuan-mitra");
  };

  const handleBack = () => {
    navigate("/admin/pengajuan-mitra");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=""
    >
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white dark:bg-gray-800 p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="nama"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
            >
              Nama
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-400 dark:focus:border-blue-400 placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="Masukkan nama mitra"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="alamat"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
            >
              Alamat
            </label>
            <textarea
              id="alamat"
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-400 dark:focus:border-blue-400 placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="Masukkan alamat mitra"
              rows="4"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="noTelp"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
            >
              Nomor Telepon
            </label>
            <input
              type="tel"
              id="noTelp"
              name="noTelp"
              value={formData.noTelp}
              onChange={handleChange}
              className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-400 dark:focus:border-blue-400 placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="Masukkan nomor telepon"
              pattern="[0-9]{10,13}"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="layanan"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
            >
              Layanan
            </label>
            <input
              type="text"
              id="layanan"
              name="layanan"
              value={formData.layanan}
              onChange={handleChange}
              className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-400 dark:focus:border-blue-400 placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="Masukkan jenis layanan"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="status"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-400 dark:focus:border-blue-400"
            >
              <option value="Aktif">Aktif</option>
              <option value="Nonaktif">Nonaktif</option>
            </select>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 bg-gray-200 dark:bg-gray-600 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"
            >
              Kembali
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 dark:bg-blue-500 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
}