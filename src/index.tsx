import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Pages from "./pages";
import { AuthProvider } from "./providers/AuthProvider";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <AuthProvider>
      <Pages />
    </AuthProvider>
  );
} else {
  console.error("Root element not found");
}
