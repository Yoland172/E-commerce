import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app/App";
import "./lib/i18n";
import { Provider } from "react-redux";
import store from "./store";

const container = document.getElementById("app-root")!;
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
