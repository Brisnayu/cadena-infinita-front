import { useState } from "react";

const AdminRegistrationForm = () => {
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [numeroTelefono, setNumeroTelefono] = useState("");
  const [cargoEmpresa, setCargoEmpresa] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");
  const [pregunta1, setPregunta1] = useState("");
  const [respuesta1, setRespuesta1] = useState("");
  const [pregunta2, setPregunta2] = useState("");
  const [respuesta2, setRespuesta2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar los datos del formulario
    // Enviar los datos del formulario al servidor
    // Redirigir a la página principal o mostrar un mensaje de éxito
  };

  return (
    <div className="form-container">
      <h2>Registro de Administradores</h2>
      <form onSubmit={handleSubmit}>
        <section className="form-section">
          <h3>Información de contacto</h3>
          <label htmlFor="nombreCompleto">Nombre completo:</label>
          <input
            type="text"
            id="nombreCompleto"
            value={nombreCompleto}
            onChange={(e) => setNombreCompleto(e.target.value)}
            required
          />
          <label htmlFor="correoElectronico">Correo electrónico:</label>
          <input
            type="email"
            id="correoElectronico"
            value={correoElectronico}
            onChange={(e) => setCorreoElectronico(e.target.value)}
            required
          />
          <label htmlFor="numeroTelefono">Número de teléfono:</label>
          <input
            type="tel"
            id="numeroTelefono"
            value={numeroTelefono}
            onChange={(e) => setNumeroTelefono(e.target.value)}
            required
          />
          <label htmlFor="cargoEmpresa">Cargo en la empresa:</label>
          <input
            type="text"
            id="cargoEmpresa"
            value={cargoEmpresa}
            onChange={(e) => setCargoEmpresa(e.target.value)}
            required
          />
        </section>
        <section className="form-section">
          <h3>Credenciales de acceso</h3>
          <label htmlFor="contrasena">Contraseña:</label>
          <input
            type="password"
            id="contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
          <label htmlFor="confirmarContrasena">Confirmar contraseña:</label>
          <input
            type="password"
            id="confirmarContrasena"
            value={confirmarContrasena}
            onChange={(e) => setConfirmarContrasena(e.target.value)}
            required
          />
        </section>
        <section className="form-section">
          <h3>Preguntas de seguridad</h3>
          <label htmlFor="pregunta1">
            ¿Cuál es el nombre de tu mascota favorita?
          </label>
          <input
            type="text"
            id="pregunta1"
            value={pregunta1}
            onChange={(e) => setPregunta1(e.target.value)}
            required
          />
          <label htmlFor="respuesta1">Respuesta 1:</label>
          <input
            type="text"
            id="respuesta1"
            value={respuesta1}
            onChange={(e) => setRespuesta1(e.target.value)}
            required
          />
          <label htmlFor="pregunta2">
            ¿Cuál es el nombre de la ciudad donde naciste?
          </label>
          <input
            type="text"
            id="pregunta2"
            value={pregunta2}
            onChange={(e) => setPregunta2(e.target.value)}
            required
          />
          <label htmlFor="respuesta2">Respuesta 2:</label>
          <input
            type="text"
            id="respuesta2"
            value={respuesta2}
            onChange={(e) => setRespuesta2(e.target.value)}
            required
          />
        </section>
        <button
          type="submit"
          className="bg-yellowWarning p-2 mt-4 hover:bg-blueInformation"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default AdminRegistrationForm;
