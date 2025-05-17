import { FiPhone, FiMail, FiMapPin, FiPrinter } from "react-icons/fi";
import logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="mt-[60px] py-8 border-t border-gray-300">
      <div className="w-[90%] max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col gap-12 md:flex-row justify-between">
    
        <div className="w-full md:w-1/2">
          <img src={logo} alt="Fixpoint Logo" className="h-20 mb-4" />
          <p className="max-w-full text-sm leading-relaxed text-gray-700">
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
              <FiMail /> syaokay@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin /> Ciamis, Jawa Barat. Indonesia
            </li>
            <li className="flex items-center gap-2">
              <FiPrinter /> +1–212–9876543
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/4">
          <h3 className="mb-4 text-lg font-bold text-gray-800">Tentang</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>
              <a href="#" className="transition-colors hover:text-blue-700">
                Beranda
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-blue-700">
                Layanan
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-blue-700">
                Artikel
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-blue-700">
                Mitra
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
