import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import { FiEdit2 } from "react-icons/fi";
import { FaGlobe, FaUsers, FaWrench } from "react-icons/fa";
import background from "../../../assets/images/bg-new-2.png";

export default function Header() {
  return (
    <section className="relative w-full h-64 overflow-visible rounded-xl">
      <div className="absolute top-0 left-0 w-full h-full dark:bg-black/40 rounded-xl z-0"></div>
      <img
        src={background}
        alt="Banner Background"
        className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
      />

      <div className="relative z-10 p-4 flex flex-col h-full justify-between">
        {/* <Breadcrumbs className="text-white dark:text-gray-200" /> */}

        <div className="-mb-14 bg-white/80 mt-[100px] dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow p-4 flex flex-col lg:flex-row items-center justify-between gap-4 z-20">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src="https://i.pravatar.cc/100"
                alt="User Avatar"
                className="w-16 h-16 rounded-xl object-cover"
              />
              <button className="absolute -bottom-1 -right-1 bg-white dark:bg-gray-700 rounded-full p-1 shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition">
                <FiEdit2 className="w-4 h-4 text-teal-500 dark:text-teal-400" />
              </button>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Esthera Jackson
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                esthera@simmmpplle.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-white dark:bg-gray-700 shadow h-10 px-4 rounded-xl flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-teal-50 dark:hover:bg-teal-900 transition">
              <FaGlobe className="text-gray-500 dark:text-gray-300" />
              Overview
            </button>
            <button className="text-gray-600 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400 flex items-center gap-2 font-semibold transition">
              <FaUsers />
              Teams
            </button>
            <button className="text-gray-600 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400 flex items-center gap-2 font-semibold transition">
              <FaWrench />
              Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}