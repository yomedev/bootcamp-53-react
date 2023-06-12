import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import "./index.css";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
