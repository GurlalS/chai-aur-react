import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// React creates its own dom(called virtual dom), later it compares with the original dom and
//see the  changes that needs to bec applied on actual dom

// for optimzation, we can also remove it, its not mandatory

// <App/> <=  custom tag, writing html through JS, more, more programming capabilty addded

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
