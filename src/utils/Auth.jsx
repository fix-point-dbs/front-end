import { Navigate } from "react-router-dom";
import { isLoggedIn, getRole } from "./LocalStorage";
export function PrivateRoute({ children }) {
  const isLogin = isLoggedIn();

  return isLogin ? children : <Navigate to="/login" />;
}

export function RoleRoute({ children, allowedRoles }) {
  const role = getRole();

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
