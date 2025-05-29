import React from "react";
import { Home, Megaphone, CheckCircle2, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FormReviewRegsitrasi = ({ status = "review" }) => {
  const navigate = useNavigate();

  const statusConfig = {
    review: {
      icon: <Megaphone className="w-12 h-12 mb-4 text-blue-600" />,
      title: "Layanan Anda Sedang Dalam Peninjauan",
      message:
        "Hai, Layanan anda akan segera aktif apabila admin menyetujui layanan tersebut. Mohon bersabar yah…",
      color: "text-blue-600",
    },
    approved: {
      icon: <CheckCircle2 className="w-12 h-12 mb-4 text-green-600" />,
      title: "Selamat! Layanan Anda Telah Disetujui",
      message:
        "Layanan anda telah aktif dan dapat digunakan. Terima kasih telah mendaftar!",
      color: "text-green-600",
    },
    rejected: {
      icon: <XCircle className="w-12 h-12 mb-4 text-red-600" />,
      title: "Mohon Maaf, Layanan Anda Ditolak",
      message:
        "Silakan periksa kembali informasi Anda dan coba lagi beberapa hari ke depan.",
      color: "text-red-600",
    },
  };

  const current = statusConfig[status];

  return (
    <div className="flex-1 p-8 bg-white shadow-md rounded-xl">
      <h4 className="pb-2 mb-2 font-bold border-b text-md">
        Review Registrasi
      </h4>

      <div className="flex flex-col items-center mt-4">
        {current.icon}
        <h3 className={`text-base font-bold ${current.color} mb-2`}>
          {current.title}
        </h3>
        <p className="mb-6 text-sm text-gray-600">{current.message}</p>

        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 px-6 py-2 text-sm font-semibold text-white bg-blue-700 rounded-md shadow hover:bg-blue-800"
        >
          <Home className="w-5 h-5 " />
          Kembali ke Dashboard
        </button>
      </div>
    </div>
  );
};

export default FormReviewRegsitrasi;
