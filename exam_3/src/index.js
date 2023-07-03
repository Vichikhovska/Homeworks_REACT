import React from "react";
import ReactDOM from "react-dom/client";

//pages
import App from "./pages/App";

//helpers
import reportWebVitals from "./reportWebVitals";

// styles
import "./styles/index.scss";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
);

reportWebVitals();
