import { PropTypes } from "prop-types";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";

import { Sidebar } from "./Sidebar/Sidebar";
import { AuthContext } from "../../context/AuthContext";
import { Suspense, useState } from "react";

export const Layout = () => {
  const [isAuth, setIsAuth] = useState(true);
  const [username, setUsername] = useState("");

  const login = (username, password) => {
    if (password === "123") {
      setIsAuth(true);
      setUsername(username);
      return;
    }
    alert("Password is incorrect");
  };

  return (
    <>
      <AuthContext.Provider value={{ isAuth, login, username }}>
        <div className="d-flex h-100">
          <Sidebar />

          <main
            className="tab-content p-5 h-100 col-10"
            style={{ minHeight: "100vh" }}
          >
            <div className="tab-pane fade show active">
              <Suspense fallback={<p>Loading...</p>}>
                <Outlet />
              </Suspense>
            </div>
          </main>
        </div>
      </AuthContext.Provider>
      <ToastContainer />
    </>
  );
};

Layout.propType = {
  children: PropTypes.node.isRequired,
};
