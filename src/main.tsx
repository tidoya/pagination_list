import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styled/global";
import { MainPage } from "./pages/main/MainPage";
const container = document.querySelector("#root") as HTMLElement;

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <MainPage />
  </React.StrictMode>
);
