import { Link } from "react-router-dom";
export default function UnauthorizedPage() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
        <div className="text-center">
          <h1 className="text-[120px] font-bold text-yellow-500 leading-none">403</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
            Akses Ditolak
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg">
            Kamu tidak memiliki izin untuk mengakses halaman ini.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-yellow-600 transition"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
  
    );
}