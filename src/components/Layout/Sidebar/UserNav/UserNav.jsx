import { NavLink } from "react-router-dom";
import { Button } from "../../../Button";
import { UserCard } from "../../../UserCard/UserCard";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../../../redux/auth/authSlice";

export const UserNav = () => {
  const dispatch = useDispatch();
  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div className="d-flex flex-column justify-content-between">
        <h2 className="h3 mb-4">Welcome back!</h2>
        <UserCard />
        <NavLink
          to="/"
          style={{ textAlign: "left", marginLeft: "-10px" }}
          className={({ isActive }) =>
            isActive ? "btn btn-primary" : "btn btn-light"
          }
        >
          Home page
        </NavLink>
        <NavLink
          to="/posts"
          style={{ textAlign: "left", marginLeft: "-10px" }}
          className={({ isActive }) =>
            isActive ? "btn btn-primary" : "btn btn-light"
          }
        >
          Posts list
        </NavLink>
        <NavLink
          to="/new-post"
          style={{ textAlign: "left", marginLeft: "-10px" }}
          className={({ isActive }) =>
            isActive ? "btn btn-primary" : "btn btn-light"
          }
        >
          Create new post
        </NavLink>
        <NavLink
          to="/exercises"
          style={{ textAlign: "left", marginLeft: "-10px" }}
          className={({ isActive }) =>
            isActive ? "btn btn-primary" : "btn btn-light"
          }
        >
          React Exercises
        </NavLink>
      </div>

      <Button
        onClick={() => dispatch(logoutAction())}
        className="btn-danger mt-auto"
      >
        Log Out
      </Button>
    </div>
  );
};
