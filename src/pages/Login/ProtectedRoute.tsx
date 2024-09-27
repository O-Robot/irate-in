// ProtectedRoute.tsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "../../context/utility";
import { toast } from "react-toastify";

const ProtectedRoute = () => {
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
