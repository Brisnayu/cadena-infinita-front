import { Link, useNavigate } from "react-router-dom";
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
        
          <Link to="/">Inicio</Link>

          <Link to="/company">Empresas</Link>

          <Link to="/juniors">Juniors</Link>

          <Link to="/challenges">Retos</Link>

          <Link to="/reports">Reportes</Link>

          <Link to="/calendar">Calendario</Link>

          <Link to="/config">Configuración</Link>

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
