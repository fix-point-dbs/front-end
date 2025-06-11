import React from "react";
import dayjs from "dayjs";
export default function Table({ services }) {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-3 sm:p-4 md:p-6">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Nama Mitra</th>
              <th className="px-6 py-3">Jenis Layanan</th>
              <th className="px-6 py-3">Alamat</th>
              <th className="px-6 py-3">No. Telp</th>
              <th className="px-6 py-3">Tanggal pengajuan</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
          {services?.map((item) => (
                  <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.bussiness_name}
                    </td>
                    <td className="px-6 py-4">{item.type}</td>
                    <td className="px-6 py-4">{item.address}</td>
                    <td className="px-6 py-4">{item.alternative_phone}</td>
                    <td className="px-6 py-4">{dayjs(item.created_at).format("D MMM YYYY")}</td>
                    <td className="px-6 py-4">{item.status}</td>
                   
                  </tr>
                ))}
            <tr className="border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-4 py-3">White</td>
              <td className="px-4 py-3">Laptop PC</td>
              <td className="px-4 py-3">$1999</td>
              <td className="px-4 py-3">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
