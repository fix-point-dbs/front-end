import { FiPhone, FiMail, FiMapPin, } from "react-icons/fi";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-10 mt-16 bg-white border-t border-gray-300">
      <div className="w-[90%] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-y-8 md:gap-12">
        <div className="w-full md:w-1/2">
          <img src={logo} alt="Fixpoint Logo" className="h-20 mb-4" />
          <p className="text-sm leading-relaxed text-gray-700">
            Fixpoint adalah sebuah platform digital yang berfokus pada solusi
            teknologi untuk membantu masyarakat dalam mengakses informasi,
            layanan, dan edukasi dengan lebih mudah dan terintegrasi. Kami
            mengembangkan sistem berbasis AI dan teknologi web modern untuk
            mendukung layanan seperti chatbot konsultasi, sistem bengkel online,
            artikel informatif, dan layanan lainnya yang bertujuan meningkatkan
            kualitas hidup dan literasi digital pengguna.
          </p>
        </div>

        <div className="w-full md:w-1/4">
          <h3 className="mb-4 text-lg font-bold text-gray-800">
            Contact Person
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <FiPhone /> 0851–5616–2840
            </li>
            <li className="flex items-center gap-2">
              <FiMail /> admin@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin /> Sumbersari, Jember Indonesia
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/4">
          <h3 className="mb-4 text-lg font-bold text-gray-800">Tentang</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>
              <a href="/" className="transition-colors hover:text-blue-700">
                Beranda
              </a>
            </li>
            <li>
              <a href="#service" className="transition-colors hover:text-blue-700">
                Layanan
              </a>
            </li>
            <li>
              <Link to={"/artikel"} className="transition-colors hover:text-blue-700">
                Artikel
              </Link>
            </li>
            <li>
              <Link to={"/mitra"} className="transition-colors hover:text-blue-700">
                Mitra
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
