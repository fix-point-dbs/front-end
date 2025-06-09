import React, { useState, useEffect } from "react";
import Sidebar from "../../views/user/dashboard/Sidebar";
import { FaBars } from "react-icons/fa";
import Pengaturan from "../../views/user/dashboard/Pengaturan";
import { Routes, Route } from "react-router-dom";
import MotionDiv from "../../utils/TransitionSmoth";
import { ProfilePresenter } from "../../presenters/profilePresenter";
import { getUser } from "../../utils/LocalStorage";
import { showSuccessToast } from "../../utils/Toast";
export function SettingUserPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onSuccess = (message) => {
    showSuccessToast(message);
  }
  const id = getUser().id;
  const presenter = new ProfilePresenter({ onSuccess });
  const handleUpdate = (data) => {
    console.log(data);
    presenter.updateUser(id, data);
  };

  const handleChangePassword = (data) => {
    console.log(data);
    presenter.changePassword(id, data);
  };
  
  useEffect(() => {
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 w-full overflow-y-auto bg-gray-50">
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

        <div className="px-10 py-6">
          <MotionDiv>
            <Pengaturan handleUpdate={handleUpdate} handleChangePassword={handleChangePassword} />
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}
