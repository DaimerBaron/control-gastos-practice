import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import BudgeContext  from "./context/BudgetContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <BudgeContext>
        <App />
      </BudgeContext>
    
  </React.StrictMode>
);
