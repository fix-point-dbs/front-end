import background from "../../../assets/images/bg-new-2.png";

export default function HeroSection() {
  return (
    <section className="relative h-[650px] pt-[70px] overflow-x-hidden">
      <img
        src={background}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover h-[700px]"
      />
      <div className="relative z-20 flex items-center justify-end h-full px-12 mx-auto max-w-7xl">
        <div
          className="max-w-lg text-white"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="300"
          
        >
          <h1 className="text-2xl font-extrabold sm:text-3xl">
            Pencarian{" "}
            <span className="px-3 text-white bg-orange-500 rounded">
              Towing & Bengkel
            </span>{" "}
            Terpercaya!
          </h1>
          <p className="mt-4 text-sm font-regular sm:text-sm md:text-base">
            Teman setia saat kendaraanmu butuh pertolongan. Cari towing dan
            bengkel terdekat dari lokasi mogokmu dengan cepat dan mudah.
            FixPoint, solusi cepat di saat darurat.
          </p>
          <button className="px-5 py-2 mt-6 text-sm font-semibold text-white rounded shadow bg-merah hover:bg-red-700 sm:text-sm md:text-sm">
            Mulai sekarang →
          </button>
        </div>
      </div>
    </section>
  );
}

