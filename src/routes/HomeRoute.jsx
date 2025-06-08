import { Route } from "react-router-dom";
import { LandingPage } from "../pages/home/LandingPage";
import { ServicePage } from "../pages/home/ServicePage";
import { DetailServicePage } from "../pages/home/DetailServicePage";
import { BookingPage } from "../pages/home/BookingPage";
import { ArtikelPage } from "../pages/home/ArtikelPage";
import { ConfirmationBookingPage } from "../pages/home/ConfirmationBookingPage";
import { PrivateRoute, RoleRoute } from "../utils/Auth"; // <- make sure this is default export

export default function HomeRoute() {
  return [
    <Route key="/" path="/" element={<LandingPage />} />,
    <Route key="services" path="/services" element={<ServicePage />} />,
    <Route
      key="detail"
      path="/service/detail/:id"
      element={<DetailServicePage />}
    />,
    <Route
      key="booking"
      path="/booking/:id"
      element={
        <PrivateRoute>
          <RoleRoute allowedRoles={["user"]}>
            <BookingPage />
          </RoleRoute>
        </PrivateRoute>
      }
    />,
    <Route
      key="confirmation"
      path="/booking/confirmation/:id"
      element={
        <PrivateRoute>
          <RoleRoute allowedRoles={["user"]}>
            <ConfirmationBookingPage />
          </RoleRoute>
        </PrivateRoute>
      }
    />,
    <Route key="artikel" path="/artikel" element={<ArtikelPage />} />,
  ];
}
