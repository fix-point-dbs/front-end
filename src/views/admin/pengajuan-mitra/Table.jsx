import { motion } from "framer-motion";
import React from "react";

export default function Table() {
  const items = [
    {
      id: 1,
      Nama: "Asep",
      Alamat: "Pluto",
      NoTelp: "123123123",
      Layanan: "Towing, Bengkel",
      Status: "Diterima",
    },
    {
      id: 2,
      Nama: "Budi",
      Alamat: "Mars",
      NoTelp: "123123123",
      Layanan: "Bengkel",
      Status: "Ditolak",
    },
    {
      id: 3,
      Nama: "Cuki",
      Alamat: "Mars",
      NoTelp: "123123123",
      Layanan: "Bengkel",
      Status: "Ditolak",
    },
    {
      id: 4,
      Nama: "Dewi",
      Alamat: "Jupiter",
      NoTelp: "456456456",
      Layanan: "Towing",
      Status: "Diterima",
    },
    {
      id: 5,
      Nama: "Eko",
      Alamat: "Venus",
      NoTelp: "789789789",
      Layanan: "Bengkel, Towing",
      Status: "Diterima",
    },
    {
      id: 6,
      Nama: "Fani",
      Alamat: "Merkurius",
      NoTelp: "321321321",
      Layanan: "Bengkel",
      Status: "Ditolak",
    },
    {
      id: 7,
      Nama: "Gita",
      Alamat: "Saturnus",
      NoTelp: "654654654",
      Layanan: "Towing",
      Status: "Diterima",
    },
    {
      id: 8,
      Nama: "Hadi",
      Alamat: "Uranus",
      NoTelp: "987987987",
      Layanan: "Bengkel",
      Status: "Ditolak",
    },
    {
      id: 9,
      Nama: "Indra",
      Alamat: "Neptunus",
      NoTelp: "147147147",
      Layanan: "Towing, Bengkel",
      Status: "Diterima",
    },
    {
      id: 10,
      Nama: "Joko",
      Alamat: "Bumi",
      NoTelp: "258258258",
      Layanan: "Bengkel",
      Status: "Ditolak",
    },
    {
      id: 11,
      Nama: "Asep",
      Alamat: "Pluto",
      NoTelp: "123123123",
      Layanan: "Towing, Bengkel",
      Status: "Diterima",
    },
    {
      id: 12,
      Nama: "Budi",
      Alamat: "Mars",
      NoTelp: "123123123",
      Layanan: "Bengkel",
      Status: "Ditolak",
    },
    {
      id: 13,
      Nama: "Cuki",
      Alamat: "Mars",
      NoTelp: "123123123",
      Layanan: "Bengkel",
      Status: "Ditolak",
    },
    {
      id: 14,
      Nama: "Dewi",
      Alamat: "Jupiter",
      NoTelp: "456456456",
      Layanan: "Towing",
      Status: "Diterima",
    },
    {
      id: 15,
      Nama: "Eko",
      Alamat: "Venus",
      NoTelp: "789789789",
      Layanan: "Bengkel, Towing",
      Status: "Diterima",
    },
    {
      id: 16,
      Nama: "Fani",
      Alamat: "Merkurius",
      NoTelp: "321321321",
      Layanan: "Bengkel",
      Status: "Ditolak",
    },
    {
      id: 17,
      Nama: "Gita",
      Alamat: "Saturnus",
      NoTelp: "654654654",
      Layanan: "Towing",
      Status: "Diterima",
    },
    {
      id: 18,
      Nama: "Hadi",
      Alamat: "Uranus",
      NoTelp: "987987987",
      Layanan: "Bengkel",
      Status: "Ditolak",
    },
    {
      id: 19,
      Nama: "Indra",
      Alamat: "Neptunus",
      NoTelp: "147147147",
      Layanan: "Towing, Bengkel",
      Status: "Diterima",
    },
    {
      id: 20,
      Nama: "Joko",
      Alamat: "Bumi",
      NoTelp: "258258258",
      Layanan: "Bengkel",
      Status: "Ditolak",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="relative w-full max-h-[80vh] overflow-y-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nama
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Alamat
                  <a href="#">
                    <svg
                      className="w-3 h-3 ms-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  No. Telp
                  <a href="#">
                    <svg
                      className="w-3 h-3 ms-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Layanan
                  <a href="#">
                    <svg
                      className="w-3 h-3 ms-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Status
                  <a href="#">
                    <svg
                      className="w-3 h-3 ms-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.Nama}
                </th>
                <td className="px-6 py-4">{item.Alamat}</td>
                <td className="px-6 py-4">{item.NoTelp}</td>
                <td className="px-6 py-4">{item.Layanan}</td>
                <td className="px-6 py-4">{item.Status}</td>
                <td className="px-6 py-4 text-center">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
}