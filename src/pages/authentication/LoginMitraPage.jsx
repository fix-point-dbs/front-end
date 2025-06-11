import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { LoginMitraPresenter } from "../../presenters/authentication/LoginMitraPresenter";  
import { showSuccessToast } from "../../utils/Toast";
import { useNavigate } from "react-router-dom";
export default function LoginMitraPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  
  const handleLogin = (e) => {
    e.preventDefault();
    presenter.handleLogin(email, password);
  };

  const onLoginSuccess = (role) => {
    showSuccessToast("Login berhasil!");
    if (role === "mitra") {
      navigate("/dashboard-mitra/statistic");
    } else if (role === "admin") {
      navigate("/admin/dashboard");
    }
  };
  
  const presenter = new LoginMitraPresenter({ setEmail, setPassword, onLoginSuccess });

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#f5f7fb] text-[#1e1e1e]">
      <div className="hidden md:flex w-full md:w-1/2 flex-col items-center justify-center p-8 space-y-6">
        <img
          src={logo}
          alt="Logo Fixpoint"
          className="h-10 mb-2"
        />
        <h2 className="text-2xl font-semibold text-center">
          Log in untuk nikmati semua keuntungannya
        </h2>
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4 w-full max-w-md">
          {benefits.map((b, idx) => (
            <div key={idx} className="flex items-start space-x-3 border-b pb-4 last:border-none">
              <img src={b.icon} alt="" className="w-6 h-6 mt-1" />
              <div>
                <p className="font-semibold">{b.title}</p>
                <p className="text-sm text-gray-600">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* KANAN - Form Login */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center px-6 py-12">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-biru mb-6">Log In</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Alamat Email"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Kata Sandi"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="text-right text-sm">
              <a href="#" className="text-blue-600 hover:underline">Lupa kata sandi?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Log In
            </button>
          </form>
          <p className="text-center mt-4 text-sm">
            Belum punya akun? <Link to="/register/mitra" className="text-blue-600 font-medium hover:underline">Buat akun yuk!</Link>
          </p>
          <p className="text-xs text-gray-500 mt-6 text-center">
            Dengan menggunakan akun dan kata sandi, Anda setuju untuk menjaga keamanan, bertanggung jawab atas penggunaannya,
            dan memahami <a href="#" className="text-blue-600 hover:underline">Kebijakan Kredensial Akses</a>.
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
  }  
];

