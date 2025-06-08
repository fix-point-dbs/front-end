import { MitraAdminPage } from "../pages/admin/MitraAdminPage";
import { BookingAdminPage } from "../pages/admin/BookingAdminPage";
import { UserAdminPage } from "../pages/admin/UserAdminPage";
import { DashboardPage } from "../pages/admin/DashboardPage";
import { PengajuanMitraPage } from "../pages/admin/PengajuanMitraPage";
import TambahMitra from "../pages/admin/TambahMitra";
import { Route } from "react-router-dom";

export default function AdminRoute() {
  return [
    <Route key="admin-dashboard" path="/admin/dashboard" element={<DashboardPage />} />,
    <Route key="admin-pengajuan" path="/admin/pengajuan-mitra" element={<PengajuanMitraPage />} />,
    <Route key="admin-mitra" path="/admin/mitra" element={<MitraAdminPage />} />,
    <Route key="admin-booking" path="/admin/booking" element={<BookingAdminPage />} />,
    <Route key="admin-pengajuan-tambah" path="/admin/pengajuan-mitra/tambah" element={<TambahMitra />} />,
    <Route key="admin-users" path="/admin/users" element={<UserAdminPage />} />,
  ];
}
