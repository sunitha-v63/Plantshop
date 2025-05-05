import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element }) {
  const isRegistered = localStorage.getItem("isRegistered") === "true";

  if (!isRegistered) {
    return <Navigate to="/register" />;
  }

  return element;
}

export default ProtectedRoute;
