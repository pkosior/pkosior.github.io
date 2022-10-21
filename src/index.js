import React from "react";
import ReactDOM from "react-dom/client";
import { FlagProvider } from "@unleash/proxy-client-react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const config = {
  url: "https://app.unleash-hosted.com/demo/api/proxy", // or https://UNLEASH_HOSTNAME/api/frontend
  clientKey: "proxy-123",
  refreshInterval: 5,
  appName: "unleash-test",
  environment: "standard",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FlagProvider config={config}>
      <App />
    </FlagProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
