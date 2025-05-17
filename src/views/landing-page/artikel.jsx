import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const articles = [
  {
    id: 1,
    title: "Tips Merawat Kendaraan di Musim Hujan",
    date: "17 Mei 2025",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.W6tCXjQK1qfdoMffVdTHzgHaE8&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    title: "Cara Mengenali Kerusakan Mesin Sejak Dini",
    date: "14 Mei 2025",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.8dkAFyJ2TDw5NySIZjHPuwHaEH&pid=Api&P=0&h=180",
  },
  {
    id: 3,
    title: "Pentingnya Ganti Oli Tepat Waktu",
    date: "10 Mei 2025",
    image:
      "https://blog.moservice.id/wp-content/uploads/2021/08/Ilustrasi-ganti-oli.jpg",
  },
  {
    id: 4,
    title: "Daftar Bengkel Towing Terbaik 2025",
    date: "8 Mei 2025",
    image:
      "https://2.bp.blogspot.com/-uXQRlqWL5XU/UoZleEZrhxI/AAAAAAAAAgk/OA8E42eH6rg/s1600/DDOC-280912-0001.jpg",
  },
];

export default function Artikel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="w-[90%] max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-[60px] mb-20">
      <div className="flex items-center justify-start">
        <p className="mb-1 ml-2 mr-4 text-sm font-black text-biru sm:text-sm">
          ARTIKEL
        </p>
        <div className="w-24 border-t border-biru"></div>
      </div>
      <h2 className="mb-4 ml-2 text-sm font-bold text-start sm:text-xl md:text-xl lg:text-xl xl:text-xl">
        Berita dan Info Terkini Seputar Kendaraan
      </h2>

      <Slider {...settings}>
        {articles.map((item) => (
          <div key={item.id} className="px-2">
            <div className="relative overflow-hidden transition duration-300 shadow group rounded-xl hover:shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-48"
              />

              <div className="p-3 bg-white">
                <p className="mb-1 text-xs text-gray-500">{item.date}</p>
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                  {item.title}
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/50 group-hover:opacity-100">
                <a
                  href={`/artikel/${item.id}`}
                  className="px-4 py-2 text-sm font-medium text-white transition rounded-md shadow bg-biru hover:bg-blue-900"
                >
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
