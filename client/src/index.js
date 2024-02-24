 import React, { StrictMode } from "react";
 import ReactDOM from "react-dom";
 import App from "./App";

 const root = document.getElementById("root");

 const Render = () => {
    return(
        <StrictMode>
            <App />
        </StrictMode>
    )
 };

 ReactDOM.render(React.createElement(Render), root);