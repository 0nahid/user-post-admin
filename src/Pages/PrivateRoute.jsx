import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

export default function PrivateRoute({ children, ...rest }) {
  const { user } = useAuth();
  return user?.accessToken ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: "/login",
      }}
    />
  );
}
