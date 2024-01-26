// ProtectedRoute.tsx
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../../context/UserContext";

interface ProtectedRouteProps {
  path: string;
  element: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ path, element }) => {
  const { state } = useAuth();
  const isAuthenticated = state;

  return isAuthenticated ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
