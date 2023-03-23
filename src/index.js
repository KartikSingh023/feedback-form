import React from "react";
import ReactDOM from "react-dom"; // lets you access the DOM of the webpage
import App from "./App";
import "./index.css";

// ReactDOM places your app on the root element on index.html
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
