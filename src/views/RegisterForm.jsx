import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  const checkPasswordMatch = () => {
    return password === confirmPassword;
  };

  const getPasswordStrength = (pwd) => {
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (/[A-Z]/.test(pwd)) strength++;
    if (/[a-z]/.test(pwd)) strength++;
    if (/[0-9]/.test(pwd)) strength++;
    if (/[^A-Za-z0-9]/.test(pwd)) strength++;

    return Math.min(strength - 1, 4); // biar tetap di range 0–4
  };

  const getPasswordStrengthStyle = (strength) => {
    const strengthMap = [
      { label: "Sangat Lemah", color: "bg-red-500", width: "w-1/5" },
      { label: "Lemah", color: "bg-orange-500", width: "w-2/5" },
      { label: "Sedang", color: "bg-yellow-500", width: "w-3/5" },
      { label: "Kuat", color: "bg-blue-500", width: "w-4/5" },
      { label: "Sangat Kuat", color: "bg-green-500", width: "w-full" },
    ];
    return strengthMap[strength] || {};
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordStrength(getPasswordStrength(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password, name, phone });
  };

  return (
    <div className="max-w-md w-full p-6 rounded-lg text-black">
      <h1 className="text-3xl font-bold text-black mb-2">Welcome</h1>
      <p className="text-gray-400 mb-6">
        Teman setia saat kendaraanmu butuh pertolongan. Cari towing dan bengkel
        terdekat dari lokasi mogokmu dengan cepat dan mudah. FixPoint, solusi
        cepat di saat darurat.
      </p>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Name"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="name@flowbite.com"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your Phone
          </label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="08xxxxxxxxxx"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Create password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
          />
          {password && (
            <div className="mt-2">
              <div className="w-full h-2 bg-gray-300 rounded">
                <div
                  className={`h-2 rounded transition-all duration-300 ${
                    getPasswordStrengthStyle(passwordStrength).color
                  } ${getPasswordStrengthStyle(passwordStrength).width}`}
                />
              </div>
              <p className="text-sm mt-1 text-gray-600">
                Strength:{" "}
                <strong>
                  {getPasswordStrengthStyle(passwordStrength).label}
                </strong>
              </p>
            </div>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="repeat-password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Confirm password
          </label>
          <input
            type="password"
            id="repeat-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
          />
          <small className="text-red-600">
            {!checkPasswordMatch() && confirmPassword
              ? "Password and confirm password must match."
              : ""}
          </small>
        </div>

        {checkPasswordMatch() && passwordStrength > 2 ? (
          <button
            type="submit"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full mb-4"
          >
            Sign up
          </button>
        ) : (
          <button
            type="submit"
            disabled
            className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full mb-4"
          >
            Sign up
          </button>
        )}

        <div className="text-center">
          <p className="text-gray-900">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 hover:underline">
              {" "}
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
