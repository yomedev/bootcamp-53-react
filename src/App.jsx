import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Header, Layout } from "./components/Layout";
// import { Rerender } from "./components/Rerender/Rerender";
// import { Timer } from "./components/Timer/Timer";
import { Users } from "./components/Users";



export const App = () => {

  return (
    <Layout>
      <Header title="Hello world!" />
      {/* <Rerender /> */}
      {/* <Timer /> */}
      <Users />
      <ToastContainer />

    </Layout>
  );
};
