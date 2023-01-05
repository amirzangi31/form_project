import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import './styles/fonts.css'
import { BrowserRouter } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
