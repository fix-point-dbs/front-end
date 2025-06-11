import { MitraAdminPage } from "../pages/admin/MitraAdminPage";
import { BookingAdminPage } from "../pages/admin/BookingAdminPage";
import { UserAdminPage } from "../pages/admin/UserAdminPage";
import { DashboardPage } from "../pages/admin/DashboardPage";
import { PengajuanMitraPage } from "../pages/admin/PengajuanMitraPage";
import TambahMitra from "../pages/admin/TambahMitra";
import { Route } from "react-router-dom";
import { PrivateRoute, RoleRoute } from "../utils/Auth";
export default function AdminRoute() {
  return [
    <Route key="admin-dashboard" path="/admin/dashboard" 
    element={
    <PrivateRoute>
      <RoleRoute allowedRoles={["admin"]}>
        <DashboardPage />
      </RoleRoute>
    </PrivateRoute>
    } />,
    <Route key="admin-pengajuan" path="/admin/pengajuan-mitra" 
    element={
    <PrivateRoute>
      <RoleRoute allowedRoles={["admin"]}>
        <PengajuanMitraPage />
      </RoleRoute>
    </PrivateRoute>
    } />,
    <Route key="admin-mitra" path="/admin/mitra" 
    element={
    <PrivateRoute>
      <RoleRoute allowedRoles={["admin"]}>
        <MitraAdminPage />
      </RoleRoute>
    </PrivateRoute>
    } />,
    <Route key="admin-booking" path="/admin/booking" 
    element={
    <PrivateRoute>
      <RoleRoute allowedRoles={["admin"]}>
        <BookingAdminPage />
      </RoleRoute>
    </PrivateRoute>
    } />,
    <Route key="admin-pengajuan-tambah" path="/admin/pengajuan-mitra/tambah" 
    element={
    <PrivateRoute>
      <RoleRoute allowedRoles={["admin"]}>
        <TambahMitra />
      </RoleRoute>
    </PrivateRoute>
    } />,
    <Route key="admin-users" path="/admin/users" 
    element={
    <PrivateRoute>
      <RoleRoute allowedRoles={["admin"]}>
        <UserAdminPage />
      </RoleRoute>
    </PrivateRoute>
    } />,
  ];
}
