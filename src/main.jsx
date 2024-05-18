import React from "react";
import "./index.css";

import "tailwindcss/tailwind.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Calendar from "./pages/Calendar.jsx";
import Challenges from "./pages/Challenges.jsx";
import Company from "./pages/Company.jsx";
import Config from "./pages/Config.jsx";
import Juniors from "./pages/Juniors.jsx";
import Login from "./pages/Login.jsx";
import RecoverPassword from "./pages/RecoverPassword.jsx";
import Roles from "./pages/Roles.jsx";
import Reports from "./pages/Reports.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/company" element={<Company />} />
          <Route path="/config" element={<Config />} />
          <Route path="/juniors" element={<Juniors />} />
          <Route path="login" element={<Login />} />
          <Route path="recoverPassword" element={<RecoverPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/roles" element={<Roles /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
