import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { App } from "./App";
import { Helmet } from "react-helmet";
import { FluentProvider, teamsDarkTheme } from "@fluentui/react-components";
import { AppProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FluentProvider theme={teamsDarkTheme}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <AppProvider>
        <App />
      </AppProvider>
    </FluentProvider>
  </React.StrictMode>,
);
