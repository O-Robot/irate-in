// ProtectedRoute.tsx
import React from "react";
import { Route, Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../../context/UserContext";
import { getCookie } from "../../context/utility";
import { toast } from "react-toastify";

const ProtectedRoute = () => {
  const location = useLocation();

  let access = getCookie("id1");
  let refresh = getCookie("id2");

  return access && refresh ? (
    <Outlet />
  ) : (
    <>
      {toast.error("Kindly Login to access this page!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        toastId: "nosession",
      })}
      <Navigate to="/" />
    </>
  );
};

export default ProtectedRoute;
