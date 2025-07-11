import React, { useState } from "react";
import { FaCog } from "react-icons/fa";
import { getUser } from "../../../utils/LocalStorage";
export default function Pengaturan({ handleUpdate, handleChangePassword }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nama: getUser().name,
    email: getUser().email,
    phone: getUser().phone,
  });

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    handleUpdate(formData);
    setIsEditing(false);
  };

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    handleChangePassword({ oldPassword, newPassword });
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const checkPasswordMatch = () => {
    return newPassword === confirmPassword;
  };

  return (
    <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-6">
      <div className="flex items-center justify-center gap-2 p-4 mb-6 bg-gray-100 border rounded-xl">
        <FaCog className="text-2xl text-black" />
        <h2 className="text-base font-bold text-black">Pengaturan</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 text-base md:grid-cols-2">
        <div className="p-4 bg-white border-b rounded shadow">
          <h3 className="pb-2 mb-4 font-bold text-black border-b border-gray-300 text-medium">
            Ganti Password
          </h3>
          <form
            onSubmit={handleSubmitPassword}
            className="flex flex-col gap-3 text-sm"
          >
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="Password Lama"
              className="p-2 border rounded"
            />
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Password Baru"
              className="p-2 border rounded"
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Konfirmasi Password Baru"
              className="p-2 border rounded"
            />
            {!checkPasswordMatch() && confirmPassword ? (
              <p className="text-red-500">
                Password baru dan konfirmasi password tidak cocok.
              </p>
            ) : (
              ""
            )}

            {(checkPasswordMatch() && oldPassword && newPassword) ? (
              <button
                type="submit"
                className="px-4 py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Simpan
              </button>
            ): (
              <button
                type="submit"
                disabled
                className="px-4 py-2 font-semibold text-white bg-gray-400 rounded"
              >
                Simpan
              </button>
            )}
          </form>
        </div>

        <div className="p-4 bg-white border rounded shadow">
          <h3 className="pb-2 mb-4 font-bold text-black border-b border-gray-300 text-medium">
            Informasi Akun
          </h3>
          <form
            className="space-y-3 text-sm text-gray-700"
            onSubmit={handleSubmitUpdate}
          >
            <div>
              <label className="block mb-1 font-bold">Nama</label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                readOnly={!isEditing}
                className={`w-full p-2 border rounded ${
                  isEditing ? "bg-white" : "bg-gray-100"
                }`}
              />
            </div>
            <div>
              <label className="block mb-1 font-bold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                readOnly={!isEditing}
                className={`w-full p-2 border rounded ${
                  isEditing ? "bg-white" : "bg-gray-100"
                }`}
              />
            </div>
            <div>
              <label className="block mb-1 font-bold">No. HP</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                readOnly={!isEditing}
                className={`w-full p-2 border rounded ${
                  isEditing ? "bg-white" : "bg-gray-100"
                }`}
              />
            </div>

            {isEditing ? (
              <div className="flex items-center justify-between gap-3 mt-3">
                <button
                  type="submit"
                  className="px-4 py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
                >
                  Simpan
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Batal
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 font-semibold text-white rounded bg-oranye hover:bg-orange-700"
              >
                Edit Profil
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
