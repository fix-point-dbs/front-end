import { Navigate } from "react-router-dom";
import { isLoggedIn, getRole, getUser } from "./LocalStorage";
import { ServiceModel } from "../models/ServiceModel";
import { useState, useEffect } from "react";
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


export function UnRegisteredServiceRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [redirectPath, setRedirectPath] = useState(null);

  useEffect(() => {
    const checkService = async () => {
      const user = getUser();
      const serviceModel = new ServiceModel();
      const services = await serviceModel.getServicesByUserId(user.id);

      if (services.data.length === 0) {
        setRedirectPath("/registration/mitra");
      } else {
        const status = services.data[0].status;
        if (status === "pending" || status === "rejected") {
          setRedirectPath(`/registrasi/review/${services.data[0].id}`);
        }
      }

      setLoading(false);
    };

    checkService();
  }, []);

  if (loading) return null;
  if (redirectPath) return <Navigate to={redirectPath} replace />;
  return children;
}

export function RegisteredServiceRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [redirectPath, setRedirectPath] = useState(null);

  useEffect(() => {
    const checkService = async () => {
      const user = getUser();
      const serviceModel = new ServiceModel();
      const services = await serviceModel.getServicesByUserId(user.id);

      if (services.data.length > 0 && services.data[0].status === "approved") {
        setRedirectPath("/dashboard-mitra/statistic");
      }

      setLoading(false);
    };

    checkService();
  }, []);

  if (loading) return null;
  if (redirectPath) return <Navigate to={redirectPath} replace />;
  return children;
}