import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/main.scss";
import App from "./app/App";
import { IntercomProvider } from "react-use-intercom";

const INTERCOM_APP_ID = "jcabc7e3";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <IntercomProvider children autoBoot appId={INTERCOM_APP_ID} />
  </React.StrictMode>,
  document.getElementById("root")
);
