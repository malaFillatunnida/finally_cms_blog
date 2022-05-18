import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

axios.defaults.withCredentials = true;
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

