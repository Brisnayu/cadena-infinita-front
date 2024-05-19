import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      login();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-1xl font-bold mb-6 text-center">¡Inicia sesión para tener acceso a tus datos más recientes!</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleForm} className="space-y-4">
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
              id="pass"
              className="mt-1 p-2 w-full border rounded-full"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Inicia sesión</button>
        </form>
        <p className="mt-4 text-center">
          ¿No tienes cuenta? <Link to="/register" className="text-blue-500 font-bold">Regístrate</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;