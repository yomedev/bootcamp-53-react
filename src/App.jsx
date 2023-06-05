import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Layout } from "./components/Layout";
import { AuthContext } from "./context/AuthContext";
import { useState } from "react";

import { Users } from "./components/Users/Users";

export const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [username, setUsername] = useState('');

  const login = (username, password) => {
    if (password === '123') {
      setIsAuth(true)
      setUsername(username)
      return
    }
    alert('Password is incorrect')
  }

  return (
    <AuthContext.Provider value={{ isAuth, login, username }}>
      <Layout>
        {/* <Memo /> */}
        {/* <Posts /> */}
        <Users />
        <ToastContainer />
      </Layout>
    </AuthContext.Provider>
  );
};
