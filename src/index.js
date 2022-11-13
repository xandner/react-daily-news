import React from "react";
import ReactDOM from "react-dom/client";

import AppRoutes from "./routes";
import { Provider } from "react-redux";
import ReduxStore from "./store";

import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={ReduxStore()}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>
);
