import { MitraPage } from "../pages/mitra/MitraPage";
import { ReviewRegistrasiPage } from "../pages/mitra/ReviewRegistrasiPage";
import { DashboardMitraPage } from "../pages/mitra/DashboardMitraPage";
import { SettingPage } from "../pages/mitra/SettingPage";
import { HistoryOrderPage } from "../pages/mitra/HistoryOrderPage";
import { OrderPage } from "../pages/mitra/OrderPage";
import { RegistrationMitraPage } from "../pages/mitra/RegistrationMitraPage";
import { Route } from "react-router-dom";
import { PrivateRoute, RoleRoute, UnRegisteredServiceRoute, RegisteredServiceRoute } from "../utils/Auth";
export default function MitraRoute() {
  return [
    <Route key="mitra" path="/mitra" element={<MitraPage />} />,
    <Route key="review-registrasi" path="/registrasi/review/:id" 
    element={
    <PrivateRoute>
      <RoleRoute allowedRoles={["mitra"]}>
        <RegisteredServiceRoute>
        <ReviewRegistrasiPage />
        </RegisteredServiceRoute>
      </RoleRoute>
    </PrivateRoute>
    } />,
    <Route key="registration-mitra" path="/registration/mitra" 
    element={
    <PrivateRoute>
      <RoleRoute allowedRoles={["mitra"]}>
        <RegisteredServiceRoute>
        <RegistrationMitraPage />
        </RegisteredServiceRoute>
      </RoleRoute>
    </PrivateRoute>
    } />,
    <Route key="dashboard-mitra-stat" path="/dashboard-mitra/statistic" 
    element={
    <PrivateRoute>
      <RoleRoute allowedRoles={["mitra"]}>
        <UnRegisteredServiceRoute>
        <DashboardMitraPage />
        </UnRegisteredServiceRoute>
      </RoleRoute>
    </PrivateRoute>
    } />,
    <Route key="dashboard-mitra-order" path="/dashboard-mitra/order" 
    element={
    <PrivateRoute>
      <RoleRoute allowedRoles={["mitra"]}>
        <UnRegisteredServiceRoute>
        <OrderPage />
        </UnRegisteredServiceRoute>
      </RoleRoute>
    </PrivateRoute>
    } />,
    <Route key="dashboard-mitra-history" path="/dashboard-mitra/history-order" 
    element={
    <PrivateRoute>
      <RoleRoute allowedRoles={["mitra"]}>
        <UnRegisteredServiceRoute>
        <HistoryOrderPage />
        </UnRegisteredServiceRoute>
      </RoleRoute>
    </PrivateRoute>} />,
    <Route key="dashboard-mitra-settings" path="/dashboard-mitra/settings" 
    element={
    <PrivateRoute>
      <RoleRoute allowedRoles={["mitra"]}>
        <UnRegisteredServiceRoute>
        <SettingPage />
        </UnRegisteredServiceRoute>
      </RoleRoute>
    </PrivateRoute>
    } />,
  ];
}
