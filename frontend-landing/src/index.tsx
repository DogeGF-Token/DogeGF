import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/main.scss";
import App from "./app/App";
import Layout from "app/components/Layout";

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);
