import React from "react";
import ReactDOM from "react-dom/client";
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.css";
import Contact from "./components/Ui/Contact";
import App from "./App";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter as Routers } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routers>
      <App />
      
    </Routers>
  </React.StrictMode>
);
