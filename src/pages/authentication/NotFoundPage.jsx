import { Link } from "react-router-dom";
export default function NotFound() {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-[120px] font-bold text-red-600 leading-none">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">Oops! Halaman tidak ditemukan</h2>
        <p className="mt-3 text-gray-600 text-base md:text-lg">
          Sepertinya halaman yang kamu cari tidak tersedia atau telah dipindahkan.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
    );
}