import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/main.scss";
import App from "./app/App";
import Layout from "app/components/Layout";
import Popup from "app/components/Dialog/Popup";

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
