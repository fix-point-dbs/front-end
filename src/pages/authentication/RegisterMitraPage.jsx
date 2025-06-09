import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RegisterMitraPresenter } from "../../presenters/authentication/RegisterMitraPresenter";
import { showSuccessToast } from "../../utils/Toast";
export default function RegisterMitraPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordStrength, setPasswordStrength] = useState(0);

  const onRegisterSuccess = () => {
    showSuccessToast("Registrasi berhasil!");
    navigate("/login/mitra");
  }
  const presenter = new RegisterMitraPresenter({ onRegisterSuccess });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === "password") {
      setPasswordStrength(getPasswordStrength(value));
    }
  };

  const checkPasswordMatch = () => form.password === confirmPassword;

  const getPasswordStrength = (pwd) => {
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (/[A-Z]/.test(pwd)) strength++;
    if (/[a-z]/.test(pwd)) strength++;
    if (/[0-9]/.test(pwd)) strength++;
    if (/[^A-Za-z0-9]/.test(pwd)) strength++;
    return Math.min(strength - 1, 4);
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

  const handleRegister = (e) => {
    e.preventDefault();
    form.role = "mitra";
    
    presenter.handleRegister(form);
  };

  const isFormValid = checkPasswordMatch() && passwordStrength > 2;

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#f5f7fb] text-[#1e1e1e]">
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

      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center px-6 py-12">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-biru mb-6">Buat Akun Mitra</h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nama Lengkap"
              className="w-full border rounded-lg px-4 py-3"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Alamat Email"
              className="w-full border rounded-lg px-4 py-3"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Nomor Telepon"
              className="w-full border rounded-lg px-4 py-3"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Kata Sandi"
              className="w-full border rounded-lg px-4 py-3"
              value={form.password}
              onChange={handleChange}
              required
            />
            {form.password && (
              <div>
                <div className="w-full h-2 bg-gray-300 rounded">
                  <div
                    className={`h-2 rounded transition-all duration-300 ${
                      getPasswordStrengthStyle(passwordStrength).color
                    } ${getPasswordStrengthStyle(passwordStrength).width}`}
                  />
                </div>
                <p className="text-sm mt-1 text-gray-600">
                  Kekuatan:{" "}
                  <strong>{getPasswordStrengthStyle(passwordStrength).label}</strong>
                </p>
              </div>
            )}
            <input
              type="password"
              name="confirmPassword"
              placeholder="Konfirmasi Kata Sandi"
              className="w-full border rounded-lg px-4 py-3"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {!checkPasswordMatch() && confirmPassword && (
              <p className="text-sm text-red-600">Kata sandi tidak cocok</p>
            )}
            <button
              type="submit"
              className={`w-full text-white font-medium py-3 rounded-lg transition ${
                isFormValid ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!isFormValid}
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
    description:
      "Jangkau lebih banyak pelanggan yang mencari layanan bengkel & towing di sekitar Anda.",
  },
  {
    icon: "https://img.icons8.com/color/48/000000/customer-support.png",
    title: "Dukungan Pelanggan 24/7",
    description:
      "Tim FixPoint siap membantu Anda kapan saja jika ada kendala dalam penggunaan platform.",
  },
  {
    icon: "https://img.icons8.com/color/48/000000/route.png",
    title: "Jangkauan Pelanggan Lebih Luas",
    description:
      "FixPoint mempermudah pelanggan menemukan layanan Anda berdasarkan lokasi mereka secara langsung.",
  },
  {
    icon: "https://img.icons8.com/color/48/000000/combo-chart.png",
    title: "Pantau Performa Layanan",
    description:
      "Lihat statistik pesanan, ulasan pelanggan, dan performa layanan Anda langsung dari dashboard.",
  },
];
