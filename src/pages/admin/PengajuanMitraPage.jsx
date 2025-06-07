import React ,{ useEffect, useState } from "react";
import Sidebar from "../../views/admin/sidebar/Sidebar";
import Breadcrumbs from "../../views/admin/header/Breadcrumbs";
import PengajuanMitra from "../../views/admin/mitra/PengajuanMitra";
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
    
        </div>
        </MotionDiv>
    </section>
  );
}