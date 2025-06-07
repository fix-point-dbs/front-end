import React ,{ useEffect, useState } from "react";
import Sidebar from "../../views/admin/sidebar/Sidebar";
import Breadcrumbs from "../../views/admin/header/Breadcrumbs";
import UserAdmin from "../../views/admin/user/UserAdmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MotionDiv from "../../utils/TransitionSmoth";
import { UserAdminPresenter } from "../../presenters/admin/UserAdminPresenter";
export function UserAdminPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading ] = useState(true);

  const presenter = new UserAdminPresenter({ setUsers, setIsLoading });
  console.log(users);

  const handleDelete = (id) => {
    presenter.deleteUser(id);
  };
  
  useEffect(() => {
    presenter.loadUsers();
  }, []);

  return (
    <section className="flex flex-col md:flex-row min-h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar />
        <MotionDiv>
        <div className="flex flex-1 flex-col p-3 sm:p-4 md:p-6 w-full overflow-y-auto mt-12 lg:mt-0">
            <Breadcrumbs />
            <UserAdmin users={users.data} isLoading={isLoading} handleDelete={handleDelete} />
        </div>
        </MotionDiv>
    </section>
  );
}