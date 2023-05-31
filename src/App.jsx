import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Layout } from "./components/Layout";
import { Posts } from "./components/Posts/Posts";



export const App = () => {

  return (
    <Layout>
      <Posts />

      <ToastContainer />
    </Layout>
  );
};
