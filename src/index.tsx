import React from "react";
import ReactDOM from "react-dom/client";
import "./globalStyles/reset.css";
import App from "page";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
