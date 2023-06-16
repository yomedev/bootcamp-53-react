import { useSelector } from "react-redux";
import { NotAuth } from "./NotAuth";
import { UserNav } from "./UserNav/UserNav";
import { selectAuthStatus } from "../../../redux/auth/authSelect";
import { fetchStatus } from "../../../constants/fetchStatus";

export const Sidebar = () => {
  const status = useSelector(selectAuthStatus);
  return (
    <aside
      className="nav nav-pills p-5 bg-light col-2"
      style={{ height: "auto" }}
    >
      <div
        className="d-flex flex-column"
        style={{ position: "sticky", top: 30, left: 0, height: "80vh" }}
      >
        {status === fetchStatus.Success ? <UserNav /> : <NotAuth />}
      </div>
    </aside>
  );
};
