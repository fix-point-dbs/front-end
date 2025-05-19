import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faStar,
  faPhone,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Detail = () => {
  useEffect(() => {
    const map = L.map("map").setView([-6.914744, 107.60981], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    L.marker([-6.914744, 107.60981])
      .addTo(map)
      .bindPopup("Bengkel Andalan Motor")
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="min-h-screen p-6 text-black bg-white">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-gray-700">
        Home / <span className="font-semibold text-black">Detail Layanan</span>
      </div>

      {/* Judul & Info */}
      <div className="mb-6">
        <h1 className="mb-2 text-3xl font-bold text-black">
          Bengkel Andalan Motor
        </h1>
        <div className="flex gap-4 text-sm text-black">
          <span className="flex items-center gap-1">
            <FontAwesomeIcon icon={faTools} className="text-yellow-500" />
            Bengkel
          </span>
          <span className="flex items-center gap-1">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            4.7/5 (230 Ulasan)
          </span>
          <span className="flex items-center gap-1">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-600" />
            Jl. Mekar Jaya No. 10, Bandung
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Kiri: Konten */}
        <div className="space-y-6 lg:col-span-2">
          {/* Deskripsi */}
          <section>
            <h2 className="mb-2 text-xl font-semibold text-black">
              Deskripsi Layanan
            </h2>
            <p>
              Bengkel Andalan Motor adalah solusi tepat untuk perbaikan dan
              perawatan kendaraan Anda. Kami melayani servis rutin, perbaikan
              mesin, ganti oli, hingga pengecekan menyeluruh. Dikerjakan oleh
              teknisi profesional dan berpengalaman.
            </p>
          </section>

          {/* Keahlian */}
          <section>
            <h2 className="mb-2 text-xl font-semibold text-black">Keahlian</h2>
            <ul className="ml-5 space-y-1 list-disc">
              <li>Servis Mesin</li>
              <li>Ganti Oli & Tune Up</li>
              <li>Perbaikan Kelistrikan</li>
              <li>Servis Rutin Motor Matic & Manual</li>
            </ul>
          </section>

          <h2 className="mb-4 text-xl font-semibold text-black">Lokasi</h2>
          <div
            id="map"
            className="w-full rounded-lg h-80"
            style={{ zIndex: 0 }}
          ></div>

          {/* Ulasan */}
          <section>
            <h2 className="mb-2 text-xl font-semibold text-black">
              Ulasan Pengguna
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-100 rounded">
                <p className="text-sm text-black">
                  “Pelayanannya cepat dan ramah. Harga juga transparan. Sangat
                  direkomendasikan!”
                </p>
                <span className="text-sm text-yellow-500">- Rina A.</span>
              </div>
              <div className="p-4 bg-gray-100 rounded">
                <p className="text-sm text-black">
                  “Sudah langganan dari dulu. Montirnya profesional dan jujur.”
                </p>
                <span className="text-sm text-yellow-500">- Budi S.</span>
              </div>
            </div>
          </section>
        </div>

        {/* Kanan: Kontak */}
        <div className="space-y-4">
          <div className="p-6 text-black bg-yellow-400 shadow-lg rounded-xl">
            <h3 className="mb-2 text-xl font-bold">Butuh Bantuan Sekarang?</h3>
            <p className="mb-4 text-sm">
              Hubungi kami untuk booking atau konsultasi langsung dengan
              teknisi.
            </p>
            <a
              href={`/bengkel/pemesanan`}
              className="flex items-center justify-center w-full px-4 py-2 mb-2 text-white transition bg-red-600 rounded hover:bg-red-700"
            >
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              Pesan Sekarang
            </a>
          </div>

          <div className="p-4 text-sm text-black bg-gray-200 rounded-lg">
            <p>
              <strong>Alamat:</strong> Jl. Mekar Jaya No. 10, Bandung
            </p>
            <p>
              <strong>Jam Buka:</strong> 08:00 - 17:00 WIB
            </p>
            <p>
              <strong>No. Telepon:</strong> +62 812-3456-789
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
