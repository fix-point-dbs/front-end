import React ,{ useEffect, useState } from "react";
import Sidebar from "../../views/admin/sidebar/Sidebar";
import Breadcrumbs from "../../views/admin/header/Breadcrumbs";
import PengajuanMitra from "../../views/admin/pengajuan-mitra/PengajuanMitra";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { PengajuanMitraPresenter } from "../../presenters/admin/PengajuanMitraPresenter";
import MotionDiv from "../../utils/TransitionSmoth";
export function PengajuanMitraPage() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading ] = useState(true);
  const navigate = useNavigate();

  const presenter = new PengajuanMitraPresenter({ setServices, setIsLoading });
  console.log(services);
  
  useEffect(() => {
    presenter.loadServices();
  }, []);
  const handleAddMitra = () => {
    navigate("/admin/pengajuan-mitra/tambah");
  };

  const handleAccept = (id) => {
    presenter.updateStatus(id, "approved");
  };
  const handleReject = (id) => {
    presenter.updateStatus(id, "rejected");
  };

  return (
    <section className="flex flex-col md:flex-row min-h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar />
        <MotionDiv>
        <div className="flex flex-1 flex-col p-3 sm:p-4 md:p-6 w-full overflow-y-auto mt-12 lg:mt-0">
            <Breadcrumbs />
            <PengajuanMitra services={services.data} isLoading={isLoading} handleAccept={handleAccept} handleReject={handleReject} />
            <button
            type="button"
            className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 z-50 flex items-center justify-center p-3 sm:p-4 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-white dark:hover:text-blue-600 dark:hover:border dark:hover:border-blue-600 dark:focus:ring-blue-800"
            onClick={handleAddMitra}
            >
            <FontAwesomeIcon icon={faPlus} className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="sr-only">Add new item</span>
            </button>
        </div>
        </MotionDiv>
    </section>
  );
}