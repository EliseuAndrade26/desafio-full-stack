import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyles.ts";
import { Typography } from "./styles/typographys.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Typography />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
