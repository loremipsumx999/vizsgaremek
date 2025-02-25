import React, {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"; 

import App from "./app.js";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);