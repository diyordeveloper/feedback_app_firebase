import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./style/AllStyle.scss";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./Context";
ReactDOM.render(
  <>
    <BrowserRouter>
      <ToastContainer />
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
