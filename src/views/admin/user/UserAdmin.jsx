import React, { useState } from "react";
import moment from "moment";
import {  faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Slider from "react-slick";
export default function UserAdmin({ users, isLoading, handleDelete }) {

  return (
    <>
    {isLoading ? (
      <div className="flex justify-center items-center py-10">
        <svg
          className="animate-spin h-8 w-8 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
        <span className="ml-2 text-gray-600 dark:text-gray-300">Memuat data...</span>
      </div>
    ) : (
      <section className="w-full">
      <div className="relative w-full max-h-[80vh] overflow-y-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
        <tr>
          <th className="px-6 py-3">No </th>
          <th className="px-6 py-3">Nama </th>
          <th className="px-6 py-3">Email</th>
          <th className="px-6 py-3">No Telepon</th>
          <th className="px-6 py-3">Role</th>
          <th className="px-6 py-3">Tanggal Register</th>
          <th className="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((item, index) => (
          <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {index + 1}
            </td>
            <td className="px-6 py-4">{item.name}</td>
            <td className="px-6 py-4">{item.email}</td>
            <td className="px-6 py-4">{item.phone}</td>
            <td className="px-6 py-4">{item.role}</td>
            <td className="px-6 py-4">{moment(item.createdAt).format("D MMM YYYY")}</td>
            <td className="px-6 py-4 flex gap-2">
              <button onClick={() => handleDelete(item.id)} className="text-red-500 w-10 h-10 rounded-lg border border-red-500">
                <FontAwesomeIcon icon={faClose} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
        </table>
      </div>

    </section>
    )}
    
</>
 
  );
}
