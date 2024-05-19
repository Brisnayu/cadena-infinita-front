import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/UseAuth";

const ColumnNav = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="text-xl w-[20vw] bg-onPrimary flex flex-col p-[30px] my-[20px] rounded-tr-lg rounded-br-lg">
      <div className="flex gap-[1rem]">
        <img
          className="w-[15%] mb-[2rem] rounded-full"
          src="/icons/auj-white-logo@2x.png"
          alt="icon AuJ"
        />
        <p className="text-[1rem]">BackOffice AUJ</p>
      </div>

      <ul className="flex flex-col gap-[2rem] text-scrim">
        {/* <NavLink to="/">Inicio</NavLink> */}
        <NavLink to="/juniors">Juniors</NavLink>
        <NavLink to="/challenges">Retos</NavLink>
        <NavLink to="/company">Empresas</NavLink>
        <NavLink to="/admins">Admins</NavLink>

        <NavLink to="/reports">Reportes</NavLink>

        <NavLink to="/calendar">Calendario</NavLink>

        <NavLink to="/config">Configuración</NavLink>

        <button className="flex" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </ul>
    </nav>
  );
};

export default ColumnNav;
