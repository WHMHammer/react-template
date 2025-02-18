import "./index.scss";

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router";
import { App } from "./App";

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<Navigate to="/index" />} />
        <Route path="/index" element={<App />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
