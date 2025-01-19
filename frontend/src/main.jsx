import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import App from "./Pages/App/App.jsx";
import Home from "./Pages/Home/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimeReactProvider>
      <BrowserRouter>
        <TopNav />
        <div className="main">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </PrimeReactProvider>
  </StrictMode>
);
