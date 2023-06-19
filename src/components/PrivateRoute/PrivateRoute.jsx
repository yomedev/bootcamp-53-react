import React from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/auth/authSelect";
import { Navigate, Outlet } from "react-router";

export const PrivateRoute = () => {
  const { access_token } = useSelector(selectAuth);
  return access_token ? <Outlet /> : <Navigate to="/login" />;
};
