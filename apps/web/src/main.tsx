import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./AppGenerator";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
