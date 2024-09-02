import { Outlet, Navigate } from "react-router-dom";

export function ProtectedRoutes() {
  const user = localStorage.getItem("user");

  return user ? <Outlet /> : <Navigate to="/login" />;
}
