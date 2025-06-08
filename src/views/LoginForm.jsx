import { useState } from "react";
import { Link } from "react-router-dom";
export function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div className="max-w-md w-full p-6 rounded-lg text-black">
      <h1 className="text-3xl font-bold text-black mb-2">Welcome Back 👋</h1>
      <p className="text-gray-400 mb-6">
        Teman setia saat kendaraanmu butuh pertolongan. Cari towing dan bengkel terdekat dari lokasi
        mogokmu dengan cepat dan mudah. FixPoint, solusi cepat di saat darurat.
      </p>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-4">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-800">
            Your email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@flowbite.com"
            className="bg-white border border-gray-600 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-800">
            Your password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 8 characters"
            className="bg-white border border-gray-600 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="flex items-center justify-end mb-4">
          <a href="#" className="text-sm font-medium text-blue-400 hover:underline">
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
        >
          Sign in
        </button>
        {/* <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-600" />
          <span className="px-3 text-gray-400">or</span>
          <hr className="flex-grow border-gray-600" />
        </div>
        <button className="w-full p-3 bg-white text-gray-900 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1.04.69-2.37 1.1-3.71 1.1-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C4.01 20.56 7.68 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.68 1 4.01 3.44 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Sign in with Google
        </button> */}
        <p className="text-center mt-1">Don't have an account? <Link to="/register" className="text-blue-400 hover:underline"> Sign up</Link></p>
      </form>
    </div>
  );
}