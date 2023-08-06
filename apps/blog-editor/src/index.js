import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import RootLayout from "./layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RootLayout>
      <App />
    </RootLayout>
  </React.StrictMode>
);
