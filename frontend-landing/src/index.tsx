import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/main.scss";
import App from "./app/App";
import Popup from "app/components/Dialog/Popup";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
