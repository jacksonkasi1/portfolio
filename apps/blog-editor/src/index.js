import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import "./styles/Editor.scss";

import App from "./App";
import RootLayout from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RootLayout>
    <App />
  </RootLayout>
);
