import React from "react";

export default function Kotak({statistics}) {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        <div 
          className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Jumlah booking
            </span>
            <span className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
              {statistics?.booking}
            </span>
          </div>
        </div>

        <div 
          className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Jumlah pengguna
            </span>
            <span className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
              {statistics?.user}
            </span>
          </div>
        </div>

        <div 
          className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Jumlah Mitra
            </span>
            <span className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
              {statistics?.service}
            </span>
          </div>
        </div>

        <div 
          className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Jumlah Pengajuan
            </span>
            <span className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
              {statistics?.pengajuan}
            </span>
          </div>
        </div>
    </div>
  );
}
