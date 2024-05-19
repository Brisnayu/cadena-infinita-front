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
        <li className="active:text-onErrorContainer">
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li className="active:text-onErrorContainer">
          <NavLink to="/company">Empresas</NavLink>
        </li>
        <li className="active:text-onErrorContainer">
          <NavLink to="/juniors">Juniors</NavLink>
        </li>
        <li className="active:text-onErrorContainer">
          <NavLink to="/challenges">Retos</NavLink>
        </li>
        <li className="active:text-onErrorContainer">
          <NavLink to="/reports">Reportes</NavLink>
        </li>
        <li className="active:text-onErrorContainer">
          <NavLink to="/calendar">Calendario</NavLink>
        </li>
        <li className="active:text-onErrorContainer">
          <NavLink to="/config">Configuración</NavLink>
        </li>
        <li className="active:text-onErrorContainer">
          <button
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default ColumnNav;
