import { Route, Routes, useNavigate, useLocation, Outlet } from "react-router-dom";
import { useEffect } from "react";
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
import { useAuth } from "./Context/UseAuth";
import "./index.css";
import "tailwindcss/tailwind.css";
import Admins from "./pages/Admins";
import "./App.css";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth(); 

  useEffect(() => {
    // Si no está autenticado y la ruta no es de inicio de sesión ni de registro, redirige a la página de inicio de sesión
    if (!isAuthenticated && !["/login", "/register"].includes(pathname)) {
      navigate("/login");
    }
  }, [pathname, navigate, isAuthenticated]);

  // Si está autenticado y la ruta es de inicio de sesión o de registro, redirige a la página de inicio
  useEffect(() => {
    if (isAuthenticated && ["/login", "/register"].includes(pathname)) {
      navigate("/");
    }
  }, [pathname, navigate, isAuthenticated]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recoverpassword" element={<RecoverPassword />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/admins" element={<Admins />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/company" element={<Company />} />
        <Route path="/config" element={<Config />} />
        <Route path="/juniors" element={<Juniors />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="*" element={<Outlet />} />
      </Route>
    </Routes>
  );
}

export default App;
