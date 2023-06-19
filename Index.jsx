import React, { useState } from "react";

export const Index = (system) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validarFormulario = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setErrorMessage("Por favor, ingrese todos los campos.");
      return;
    }

    if (password.length < 8) {
        setErrorMessage("La contraseña debe tener al menos 8 caracteres.");
        return;
      }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        setErrorMessage("Ingrese un correo electrónico válido.");
        return;
      }

    // Envío del formulario
    console.log("Formulario enviado");
    system.onFormSwitch('index2')

    // Restablecer los campos y el mensaje de error
    setEmail("");
    setPassword("");
    setErrorMessage("");
  };

  return (
    <div>
    <form onSubmit={validarFormulario}>
      <h4>INICIO DE SESIÓN</h4>
      <label htmlFor="email">Correo:</label>
      <input
      class="controls"
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Ingrese su correo"
      />
      <br />
      <label htmlFor="password">Contraseña:</label>
      <input
      class="controls"
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="Ingrese su contraseña"
      />
      <br />
      {errorMessage && <p>{errorMessage}</p>}
      
      <span className="link-conte">¿No tienes una cuenta?{' '}
          <span className="link" onClick={() => system.onFormSwitch('index0')}><p>Regístrate aquí</p></span>
        </span>
        <button class="button" type="submit" value="Ingresar"> Ingresar</button>
    </form>
    </div>
  );
};

export default Index;
