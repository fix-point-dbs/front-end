import { FaBars } from "react-icons/fa";
export default function Navbar({setSidebarOpen}) {
    return(
        <div className="px-10 py-6 bg-white border-b shadow">
        <div className="flex items-center gap-4">
          <button
            className="p-2 rounded text-biru md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars />
          </button>
          <h1 className="text-base font-bold sm:text-base md:text-medium lg:text-medium text-biru">
            Halo, Etak!
          </h1>
        </div>
      </div>
    )
}