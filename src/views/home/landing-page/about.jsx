import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWrench,
  faComments,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import about from "../../../assets/images/bg-about.png";

export default function About() {
  return (
    <section className="relative w-[90%] max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-[60px] overflow-hidden">
      <div className="flex items-center justify-start">
        <p className="mx-4 mb-1 text-sm font-black text-biru">ABOUT</p>
        <div className="w-24 border-t border-biru"></div>
      </div>
      <h2 className="mx-4 mb-20 text-lg font-bold text-gray-800">
        Mengapa Harus Fixpoint?
      </h2>

      <div className="flex flex-col-reverse items-center gap-8 px-2 lg:flex-row lg:items-start">
        <div className="flex-1 space-y-6 text-left" data-aos="fade-right">
          <div className="flex items-start gap-4">
            <FontAwesomeIcon
              icon={faWrench}
              className="mt-1 text-lg text-biru"
            />
            <div>
              <h4 className="mb-1 text-base font-black text-biru">
                Cari Bengkel & Towing
              </h4>
              <p className="text-sm text-gray-600">
                Temukan berbagai bengkel dan towing di sekitar kamu saat mogok.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FontAwesomeIcon
              icon={faComments}
              className="mt-1 text-lg text-biru"
            />
            <div>
              <h3 className="mb-1 text-base font-black text-biru">
                Deteksi Kerusakan
              </h3>
              <p className="text-sm text-gray-600">
                Gunakan chatbot untuk mendeteksi kerusakan pada kendaraan kamu.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FontAwesomeIcon
              icon={faHandshake}
              className="mt-1 text-lg text-biru"
            />
            <div>
              <h3 className="mb-1 text-base font-black text-biru">
                Registrasi Mitra
              </h3>
              <p className="text-sm text-gray-600">
                Daftarkan usaha bengkel atau towing kamu dan jadi mitra kami!
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1" data-aos="fade-left">
          <img
            src={about}
            alt="About Bg"
            className="object-contain w-full h-auto max-w-md lg:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
