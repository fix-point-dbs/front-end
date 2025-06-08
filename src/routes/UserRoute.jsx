import { Route } from "react-router-dom";
import { BookingUserPage } from "../pages/user/BookingUserPage";
import { SettingUserPage } from "../pages/user/SettingUserPage";
import { PrivateRoute, RoleRoute } from "../utils/Auth";
export default function UserRoute() {
  return [
    <Route
      key="user-booking"
      path="/dashboard-user/booking"
      element={
      <PrivateRoute>
        <RoleRoute allowedRoles={["user"]}>
          <BookingUserPage />
        </RoleRoute>
      </PrivateRoute>
      }
    />,
    <Route
      key="user-settings"
      path="/dashboard-user/settings"
      element={
      <PrivateRoute>
        <RoleRoute allowedRoles={["user"]}>
          <SettingUserPage />
        </RoleRoute>
      </PrivateRoute>
      }
    />
  ];
}
