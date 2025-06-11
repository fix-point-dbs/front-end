import React ,{ useEffect, useState } from "react";
import Sidebar from "../../views/admin/sidebar/Sidebar";
import Breadcrumbs from "../../views/admin/header/Breadcrumbs";
import SemuaMitra from "../../views/admin/mitra/SemuaMitra";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MotionDiv from "../../utils/TransitionSmoth";
import { MitraAdminPresenter } from "../../presenters/admin/MitraAdminPresenter";
export function MitraAdminPage() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading ] = useState(true);

  const presenter = new MitraAdminPresenter({ setServices, setIsLoading });
  console.log(services);
  
  useEffect(() => {
    presenter.loadServices();
  }, []);

  const handleDelete = (id) => {
    presenter.deleteService(id);
  };

  return (
    <section className="flex flex-col md:flex-row min-h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar />
        <MotionDiv>
        <div className="flex flex-1 flex-col p-3 sm:p-4 md:p-6 w-full overflow-y-auto mt-12 lg:mt-0">
            <Breadcrumbs />
            <SemuaMitra services={services.data} isLoading={isLoading} handleDelete={handleDelete} />
        </div>
        </MotionDiv>
    </section>
  );
}