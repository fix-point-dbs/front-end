import React from "react";
import Sidebar from "../../views/admin/sidebar/Sidebar";
import Header from "../../views/admin/header/Header";
import Index from "../../views/admin/dashboard/Index";

export function Dashboard() {
    return (
        <div className="flex max-h-screen overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col p-3 bg-gray-50 dark:bg-gray-900 h-screen overflow-y-auto">
                <Header />
                <Index />
            </div>  
        </div>
    );
}