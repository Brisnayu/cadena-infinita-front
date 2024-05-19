import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const ColumnNav = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="text-xl w-[20vw] h-[100vh] bg-onPrimaryContainer pt-6 flex flex-col items-center rounded-tr-[6rem]">
      <img
        className="w-[50%] mb-[2rem]"
        src="/icons/auj-white-logo-no-bg.png"
        alt="icon AuJ"
      />

      <ul className="flex flex-col gap-[3.5rem] font-bold text-onPrimary">
        
          <NavLink to="/">Inicio</NavLink>

          <NavLink to="/company">Empresas</NavLink>

          <NavLink to="/juniors">Juniors</NavLink>

          <NavLink to="/challenges">Retos</NavLink>

          <NavLink to="/reports">Reportes</NavLink>

          <NavLink to="/calendar">Calendario</NavLink>

          <NavLink to="/config">Configuración</NavLink>

          <button
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
      </ul>
    </nav>
  );
};

export default ColumnNav;
