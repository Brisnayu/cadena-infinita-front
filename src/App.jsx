import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "./Context/AuthContext";
import Login from "./pages/Login";
import Layout from "./Componentes/Layout";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Challenges from "./pages/Challenges";
import Company from "./pages/Company";
import Config from "./pages/Config";
import Juniors from "./pages/Juniors";
import RecoverPassword from "./pages/RecoverPassword";
import Roles from "./pages/Roles";
import Reports from "./pages/Reports";
import Register from "./pages/Register";
import "./index.css";
import "tailwindcss/tailwind.css";

function App() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recoverpassword" element={<RecoverPassword />} />
      {isAuthenticated ? (
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/company" element={<Company />} />
          <Route path="/config" element={<Config />} />
          <Route path="/juniors" element={<Juniors />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/roles" element={<Roles />} />
        </Route>
      ) : null}
    </Routes>
  );
}

export default App;
