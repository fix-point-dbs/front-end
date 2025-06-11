import { AuthModel } from "../models/AuthModel";
import { logout } from "./LocalStorage";
import { useNavigate } from "react-router-dom";

export function useHandleLogout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const authModel = new AuthModel();
      await authModel.logout();
      logout();
      navigate("/"); 
    } catch (error) {
      console.log(error);
    }
  };

  return handleLogout;
}
