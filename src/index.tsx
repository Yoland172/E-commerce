import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app/App";
import "./lib/i18n";
import { Provider } from "react-redux";
import store from "./store";
import "./styles/index.scss";
import {HashRouter as BrowserRouter } from "react-router-dom";

const container = document.getElementById("app-root")!;
createRoot(container).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
