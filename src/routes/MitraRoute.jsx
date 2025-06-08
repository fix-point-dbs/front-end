import { MitraPage } from "../pages/mitra/MitraPage";
import { ReviewRegistrasiPage } from "../pages/mitra/ReviewRegistrasiPage";
import { DashboardMitraPage } from "../pages/mitra/DashboardMitraPage";
import { SettingPage } from "../pages/mitra/SettingPage";
import { HistoryOrderPage } from "../pages/mitra/HistoryOrderPage";
import { OrderPage } from "../pages/mitra/OrderPage";
import { RegistrationMitraPage } from "../pages/mitra/RegistrationMitraPage";
import { Route } from "react-router-dom";

export default function MitraRoute() {
  return [
    <Route key="mitra" path="/mitra" element={<MitraPage />} />,
    <Route key="review-registrasi" path="/registrasi/review/:id" element={<ReviewRegistrasiPage />} />,
    <Route key="registration-mitra" path="/registration/mitra" element={<RegistrationMitraPage />} />,
    <Route key="dashboard-mitra-stat" path="/dashboard-mitra/statistic" element={<DashboardMitraPage />} />,
    <Route key="dashboard-mitra-order" path="/dashboard-mitra/order" element={<OrderPage />} />,
    <Route key="dashboard-mitra-history" path="/dashboard-mitra/history-order" element={<HistoryOrderPage />} />,
    <Route key="dashboard-mitra-settings" path="/dashboard-mitra/settings" element={<SettingPage />} />,
  ];
}
