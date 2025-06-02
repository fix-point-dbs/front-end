import NavbarMitra from "./NavbarMitra";
import background from "../../assets/images/bg-mitra.png";
import about from "../../assets/images/bg-about.png";
import logo from "../../assets/images/bg-regis.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWrench,
  faComments,
  faHandshake,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../home/footer/Footer";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function LandingPage() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);
  return (
    <>
      <NavbarMitra />
      <section
        id="beranda"
        className="relative h-[650px] pt-[70px] overflow-x-hidden px-12"
      >
        <div className="relative z-20 flex flex-col-reverse items-center justify-between order-last h-full px-6 mx-auto md:flex-row md:px-12 max-w-7xl md:order-first">
          <div
            className="max-w-lg text-white"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div className="max-w-lg mt-10 text-blue-600 md:mt-0">
              <h1 className="text-2xl font-extrabold sm:text-3xl">
                Jadilah Mitra Bersama{" "}
                <span className="px-3 text-white bg-orange-500 rounded">
                  FIXPOINT!
                </span>{" "}
                Terpecaya!
              </h1>
              <p className="mt-4 text-sm text-black font-regular sm:text-sm md:text-base">
                Ayo, bergabung bersama FIXPOINT dan bersiaplah untuk menyambut
                lebih banyak pelanggan. Daftarkan bengkel maupun towing anda.
                Anda bisa gabung sekarang dengan proses registrasi yang mudah
                dan cepat!
              </p>
              <a href="/register">
                <button className="px-5 py-2 mt-6 text-sm font-semibold text-white rounded shadow bg-merah hover:bg-red-700 sm:text-sm md:text-sm">
                  Gabung Sekarang →
                </button>
              </a>
            </div>
          </div>
          <div
            className="flex-shrink-0 w-full mt-6 md:w-1/2 md:mt-0"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <img
              src={background}
              alt="Hero background"
              className="w-full h-auto object-contain max-h-[250px] md:max-h-[500px] rounded-lg floating"
            />
          </div>
        </div>
      </section>

      <section
        id="partner"
        className="px-12 py-16 bg-white sm:px-24 md:px-12 lg:px-16 xl:px-24"
      >
        <div className="flex items-center justify-center">
          <div className="w-20 border-t border-biru"></div>
          <p
            className="mx-1 mb-1 text-sm font-black text-biru sm:text-sm"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            PATNER KAMI
          </p>
          <div className="w-20 border-t border-biru"></div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 px-4 mt-4">
          <img
            src="https://assets.cdn.dicoding.com/original/commons/homepage-partner-dbsf-2x.png"
            className="object-contain h-12 sm:h-20 w-28 sm:w-32"
            alt="Partner 1"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="600"
          />
          <img
            src="https://assets.cdn.dicoding.com/original/commons/homepage-partner-bangkit.png"
            className="object-contain h-12 sm:h-20 w-28 sm:w-32"
            alt="Partner 2"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="600"
          />
          <img
            src="https://assets.cdn.dicoding.com/original/commons/homepage-partner-kampus-merdeka.png"
            className="object-contain h-12 sm:h-20 w-28 sm:w-32"
            alt="Partner 3"
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="600"
          />
          <img
            src="https://assets.cdn.dicoding.com/original/commons/certificate_logo.png"
            className="object-contain w-20 h-10 sm:h-14 sm:w-24"
            alt="Partner 4"
            data-aos="zoom-in"
            data-aos-delay="700"
            data-aos-duration="600"
          />
        </div>
      </section>

      <section
        id="tentang"
        className="px-12 py-16 bg-white sm:px-24 md:px-12 lg:px-16 xl:px-24"
      >
        <div className="container flex flex-col items-center gap-10 px-4 mx-auto lg:flex-row">
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img src={about} alt="About Image" />
          </div>

          <div
            className="w-full lg:w-1/2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div className="flex items-center justify-start">
              <p className="mb-1 text-sm font-black text-biru sm:text-sm">
                ABOUT
              </p>
              <div className="w-24 border-t border-biru"></div>
            </div>
            <h2 className="mb-4 text-lg font-bold text-gray-800 text-start">
              Tentang Mitra Fixpoint
            </h2>
            <p className="mb-6 text-gray-700">
              Menjadi Mitra FIXPOINT berarti membuka peluang baru untuk
              mengembangkan usaha bengkel atau layanan towing Anda ke tingkat
              yang lebih profesional dan digital.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div
                className="p-4 bg-white rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="800"
              >
                <h4 className="pb-2 mb-2 font-semibold text-center border-b border-gray-300">
                  Towing
                </h4>
                <ul className="mt-2 text-sm text-gray-600 list-disc list-inside text-start">
                  <li>Menerima permintaan derek dari aplikasi FIXPOINT.</li>
                  <li>Menjangkau pelanggan lebih luas secara online.</li>
                  <li>
                    Memiliki sistem pemesanan yang transparan dan efisien.
                  </li>
                </ul>
              </div>
              <div
                className="p-4 bg-white rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="800"
              >
                <h4 className="pb-2 mb-2 font-semibold text-center border-b border-gray-300">
                  Bengkel
                </h4>
                <ul className="mt-2 text-sm text-gray-600 list-disc list-inside text-start">
                  <li>Menampilkan profil dan layanan bengkel di FIXPOINT.</li>
                  <li>Menerima pelanggan melalui booking online.</li>
                  <li>Meningkatkan kepercayaan dengan ulasan dan rating.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="tentang"
        className="px-12 py-16 bg-white sm:px-24 md:px-12 lg:px-16 xl:px-24"
      >
        <div className="flex items-center justify-center">
          <div className="w-24 border-t border-biru"></div>
          <p className="mb-1 text-sm font-black text-biru sm:text-sm">WHY</p>
          <div className="w-24 border-t border-biru"></div>
        </div>
        <h2 className="mb-10 text-lg font-bold text-center text-gray-800">
          Mengapa Harus Menjadi Mitra Kami?
        </h2>
        <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-4">
          {[faWrench, faComments, faHandshake, faUserShield].map((icon, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center"
              data-aos="zoom-in"
              data-aos-delay={i * 200} 
              data-aos-duration="800"
            >
              <div className="p-4 mb-4 text-xl text-white rounded-full bg-biru">
                <FontAwesomeIcon icon={icon} />
              </div>
              <h3 className="font-bold">
                {
                  [
                    "Layanan Bengkel & Towing",
                    "Permintaan Real-Time",
                    "Kemitraan Fleksibel",
                    "Dukungan & Keamanan",
                  ][i]
                }
              </h3>
              <p className="text-sm text-gray-600">
                {
                  [
                    "Daftarkan bengkel atau layanan towing Anda dan dapatkan lebih banyak pelanggan.",
                    "Terima notifikasi langsung saat pelanggan membutuhkan layanan Anda.",
                    "Kami membuka peluang kerja sama untuk bengkel dan towing di seluruh Indonesia.",
                    "Kami siap membantu mitra dengan dukungan teknis dan jaminan keamanan transaksi.",
                  ][i]
                }
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="pertanyaan"
        className="px-12 py-16 bg-white sm:px-24 md:px-12 lg:px-16 xl:px-24"
      >
        <div className="flex flex-col items-start gap-12 mx-auto max-w-7xl md:flex-row-reverse">
          <motion.div
            className="flex justify-center flex-1"
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-sm">
              <img
                src={logo}
                alt="Pertanyaan Image"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex-1"
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-start">
              <p className="mx-1 mb-1 text-sm font-black uppercase text-biru sm:text-sm">
                How to Register Your Vehicle Service
              </p>
              <div className="w-20 border-t border-biru"></div>
            </div>
            <h2 className="mb-10 text-lg font-bold text-gray-800 text-start">
              Cara Mendaftarkan Layanan Kendaraan
            </h2>
            <div className="relative pl-6 border-l-2 border-biru">
              {[
                [
                  "Jadi Mitra",
                  "Gabung sebagai mitra untuk mulai mendaftarkan layanan kendaraan Anda.",
                ],
                [
                  "Buat Akun Mitra",
                  "Buat akun khusus untuk mitra agar bisa mengakses dashboard layanan.",
                ],
                [
                  "Isi Form Registrasi",
                  "Lengkapi form registrasi yang dibutuhkan untuk menginformasikan layanan Anda.",
                ],
                [
                  "Tunggu Konfirmasi Admin",
                  "Setelah pengajuan, admin akan memverifikasi dan mengaktifkan akun Anda.",
                ],
              ].map(([judul, isi], idx) => (
                <div className={`relative ${idx < 3 ? "mb-10" : ""}`} key={idx}>
                  <div className="absolute top-0 flex items-center justify-center w-8 h-8 text-sm font-semibold text-white rounded-full -left-9 bg-biru">
                    {`0${idx + 1}`}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {judul}
                  </h3>
                  <p className="text-gray-600">{isi}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
