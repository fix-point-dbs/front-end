import React from "react";
import Sidebar from "../../views/admin/sidebar/sidebar";
import Header from "../../views/admin/header/header";
import IndexPage from "../../views/admin/dashboard";

export function Dashboard() {
    return (
        <>
            <div className="flex h-screen">
                <Sidebar />
                <div className=" flex-1 flex flex-col p-3 bg-gray-50">
                    <Header />
                    <IndexPage />
                </div>  
            </div>
        </>
    )
}