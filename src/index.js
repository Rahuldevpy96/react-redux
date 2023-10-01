import React from "react";
import ReactDOm from "react-dom/client"
import App from "./App";

const element = document.getElementById("root")
const root = ReactDOm.createRoot(element)

root.render(<App />)
