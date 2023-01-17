import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//! Contexts
import ThemeContextProvider from "./context/ThemeContext";
import WorkoutContextProvider from "./context/WorkoutContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <WorkoutContextProvider>
        <App />
      </WorkoutContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
