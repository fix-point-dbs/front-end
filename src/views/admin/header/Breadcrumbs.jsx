import React from "react";
import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Breadcrumbs( { className = "" } ) {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Pengajuan Mitra", path: "/admin/pengajuan-mitra" },
    { name: "Mitra", path: "/admin/mitra" },
    { name: "Pemesanan", path: "/admin/pemesanan" },
    { name: "User", path: "/admin/user" },
    { name: "Laporan", path: "/admin/laporan" },
    { name: "Tambah Mitra", path: "/admin/pengajuan-mitra/tambah" },
  ];

  const pathnames = location.pathname.split("/").filter((x) => x);
  const breadcrumbs = pathnames
    .map((value, index) => {
      const path = `/${pathnames.slice(0, index + 1).join("/")}`;
      const matchedItem = navItems.find((item) => item.path === path);
      return matchedItem ? { name: matchedItem.name, path } : { name: value, path };
    });

  const activePage =
    navItems.find((item) => item.path === location.pathname)?.name || "Home";

  return (
    <div className="flex w-full flex-row">
        <div className="w-full px-4 py-2">
          <nav className={`text-sm dark:text-gray-300 mb-1 ${className}`}>
            Pages / {activePage}
          </nav>

          <nav aria-label="Breadcrumb" className={`mb-4 font-semibold text-black dark:text-white ${className}`}>
            {activePage}
          </nav>
        </div>
        <form className="w-full py-2  md:max-w-sm">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-400 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400"/>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search ..."
            required
          />
        </div>
      </form>
    </div>  
  );
}
