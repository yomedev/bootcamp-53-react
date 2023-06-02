import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Layout } from "./components/Layout";
import { Counter } from "./components/Counter";
// import { useState } from "react";
import { LoginForm } from "./components/LoginForm/LoginForm";



export const App = () => {

  // const [counter, setCounter] = useState(15)

  return (
    <Layout>
      {/* <button className="btn btn-primary" onClick={() => setCounter(prev => prev + 1)}>{counter}</button> */}
      <LoginForm />
      <Counter defaultAndroid={0}  />
      <ToastContainer />
    </Layout>
  );
};
