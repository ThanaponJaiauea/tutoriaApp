/** @format */

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import SelectedNavbarContextProvider from "./contexts/SelectedNavbarContext.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SelectedNavbarContextProvider>
      <App />
    </SelectedNavbarContextProvider>
  </React.StrictMode>
)
