import React from "react";
import Sidebar from "../../views/admin/sidebar/Sidebar";
import Header from "../../views/admin/header/Header";
import Kotak from "../../views/admin/dashboard/Kotak";
import Graph from "../../views/admin/dashboard/Graph";
import Table from "../../views/admin/dashboard/Table";
import { DashboardAdminPresenter } from "../../presenters/admin/DashboardAdminPresenter";
import { useState, useEffect } from "react";
import { StatisticsModel } from "../../models/StatisticsModel";
import MotionDiv from "../../utils/TransitionSmoth";
export function DashboardPage() {
    const [statistics, setStatistics] = useState([]);
    const [services, setServices] = useState([]);
    const [grap, setGrap] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const presenter = new DashboardAdminPresenter({ setStatistics, setIsLoading, setServices, setGrap });
    useEffect(() => {
      presenter.loadDashboard();
    }, []);
  return (
    <div className="flex max-h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col p-3 bg-gray-50 dark:bg-gray-900 h-screen overflow-y-auto">
        <Header />
      <MotionDiv>
        <div className="flex flex-col gap-4 mt-14 w-full h-full">
          <div className="w-full">
            <Kotak statistics={statistics.data} isLoading={isLoading} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
            <div className="w-full h-[400px]">
              <Graph grap={grap.data} isLoading={isLoading} />
            </div>
            <div className="w-full h-[400px] overflow-y-auto overflow-x-auto">
              <Table services={services.data} isLoading={isLoading} />
            </div>
          </div>
        </div>
    </MotionDiv>
      </div>
    </div>
  );
}
