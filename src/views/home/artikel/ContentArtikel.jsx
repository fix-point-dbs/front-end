// src/components/ContentArtikel.jsx
import React from "react";

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

export default function ContentArtikel() {
  return (
    <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-2">
      {articles.map((item) => (
        <div
          key={item.id}
          className="relative overflow-hidden transition duration-300 bg-white shadow group rounded-xl hover:shadow-lg"
        >
          <img
            src={item.image}
            alt={item.title}
            className="object-cover w-full h-48"
          />
          <div className="p-3">
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
      ))}
    </div>
  );
}
