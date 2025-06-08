import { Route } from "react-router-dom";
import { BookingUserPage } from "../pages/user/BookingUserPage";
import { SettingUserPage } from "../pages/user/SettingUserPage";

export default function UserRoute() {
  return [
    <Route
      key="user-booking"
      path="/dashboard-user/booking"
      element={<BookingUserPage />}
    />,
    <Route
      key="user-settings"
      path="/dashboard-user/settings"
      element={<SettingUserPage />}
    />
  ];
}
