import React from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/auth/authSelect";
import { Navigate, Outlet, useLocation } from "react-router";

export const PublicRoute = () => {
  const { access_token } = useSelector(selectAuth);
  const location = useLocation();
  console.log(location.state?.login);// state = null
  return !access_token ? (
    <Outlet />
  ) : (
    <Navigate to={location.state?.login ?? "/posts"} />
  );
};
