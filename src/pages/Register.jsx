import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import LayoutForms from "../Componentes/LayoutForms";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      await register(email, password);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <LayoutForms>
      <div className="p-8 rounded-lg shadow-md w-full max-w-md bg-onPrimary">
        <h2 className="text-1xl mb-6 text-center">Registro</h2>
        {error && <p className="mb-4">{error}</p>}
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Usuario"
              id="email"
              className="mt-1 p-2 w-full border rounded-full"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              id="password"
              className="mt-1 p-2 w-full border rounded-full"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirmar contraseña"
              id="confirmPassword"
              className="mt-1 p-2 w-full border rounded-full"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 border rounded-full bg-onPrimaryContainer text-onPrimary"
          >
            Regístrate
          </button>
        </form>
        <p className="mt-4 text-center">
          ¿Tienes cuenta?{" "}
          <Link to="/login" className="font-bold">
            Inicia sesión
          </Link>
        </p>
      </div>
    </LayoutForms>
  );
};

export default Register;
