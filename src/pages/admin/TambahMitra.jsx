import React from "react";
import Sidebar from "../../views/admin/sidebar/Sidebar";
import FormTambahMitra from "../../views/admin/tambah-mitra/FormTambahMitra";
import Breadcrumbs from "../../views/admin/header/Breadcrumbs";

export default function TambahMitra() {
  return (
    <section className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex flex-1 flex-col p-3 bg-gray-50 dark:bg-gray-900 mt-12 lg:mt-0">
        <Breadcrumbs />
        <FormTambahMitra />
      </div>
    </section>
  );
}