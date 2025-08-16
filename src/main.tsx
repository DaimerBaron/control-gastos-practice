import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import BudgeProvider from "./context/BudgeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BudgeProvider>
      <App />
    </BudgeProvider>
  </React.StrictMode>
);
