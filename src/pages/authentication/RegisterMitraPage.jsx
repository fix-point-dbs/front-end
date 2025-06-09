import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
export default function RegisterMitraPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // TODO: call register presenter
    console.log(form);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#f5f7fb] text-[#1e1e1e]">
      {/* KIRI - Manfaat */}
      <div className="hidden md:flex w-full md:w-1/2 flex-col items-center justify-center p-8 space-y-6">
        <img src={logo} alt="Logo Fixpoint" className="h-10 mb-2" />
        <h2 className="text-2xl font-semibold text-center">
          Daftar dan nikmati semua keuntungannya
        </h2>
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4 w-full max-w-md">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-3 border-b pb-4 last:border-none"
            >
              <img src={b.icon} alt="" className="w-6 h-6 mt-1" />
              <div>
                <p className="font-semibold">{b.title}</p>
                <p className="text-sm text-gray-600">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* KANAN - Form Register */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center px-6 py-12">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-biru mb-6">Buat Akun Mitra</h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nama Lengkap"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Alamat Email"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Nomor Telepon"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Kata Sandi"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Konfirmasi Kata Sandi"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Daftar Sekarang
            </button>
          </form>
          <p className="text-center mt-4 text-sm">
            Sudah punya akun?{" "}
            <Link to="/login/mitra" className="text-blue-600 font-medium hover:underline">
              Masuk di sini
            </Link>
          </p>
          <p className="text-xs text-gray-500 mt-6 text-center">
            Dengan mendaftar, Anda menyetujui syarat & ketentuan serta memahami{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Kebijakan Kredensial Akses
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

const benefits = [
  {
    icon: "https://img.icons8.com/color/48/000000/appointment-reminders.png",
    title: "Bertumbuh Lebih Cepat",
    description: "Jangkau lebih banyak pelanggan yang mencari layanan bengkel & towing di sekitar Anda.",
  },
  {
    icon: "https://img.icons8.com/color/48/000000/customer-support.png",
    title: "Dukungan Pelanggan 24/7",
    description: "Tim FixPoint siap membantu Anda kapan saja jika ada kendala dalam penggunaan platform.",
  },
  {
    icon: "https://img.icons8.com/color/48/000000/route.png",
    title: "Jangkauan Pelanggan Lebih Luas",
    description: "FixPoint mempermudah pelanggan menemukan layanan Anda berdasarkan lokasi mereka secara langsung.",
  },
  {
    icon: "https://img.icons8.com/color/48/000000/combo-chart.png",
    title: "Pantau Performa Layanan",
    description: "Lihat statistik pesanan, ulasan pelanggan, dan performa layanan Anda langsung dari dashboard.",
  },
];
