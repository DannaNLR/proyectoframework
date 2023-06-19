import React, { useRef } from "react";

export const Index0 = (system) => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  const ageRef = useRef();
  const passwordRef = useRef();

  const validarFormulario = (event) => {
    event.preventDefault();

    // Obtener los valores de los campos del formulario utilizando las referencias
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const mobile = mobileRef.current.value;
    const age = ageRef.current.value;
    const password = passwordRef.current.value;

    // Realizar la lógica de validación del formulario
    if (username.trim() === "") {
      console.log("Ingrese un nombre de usuario válido");
      return;
    }

    if (email.trim() === "" || !email.includes("@")) {
      console.log("Ingrese un correo electrónico válido");
      return;
    }

    if (mobile.trim() === "") {
      console.log("Ingrese un número de teléfono válido");
      return;
    }

    if (isNaN(age) || age <= 0) {
      console.log("Ingrese una edad válida");
      return;
    }

    if (password.length < 8) {
      console.log("La contraseña debe tener al menos 8 caracteres");
      return;
    }

    // Si la validación es exitosa, enviar el formulario
    console.log("Formulario enviado");

    // Restablecer los campos y realizar cualquier otra acción necesaria
    usernameRef.current.value = "";
    emailRef.current.value = "";
    mobileRef.current.value = "";
    ageRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <form onSubmit={validarFormulario}>
      <h4>REGISTRARSE</h4>
      <label htmlFor="username">Nombre de usuario:</label>
      <input
        className="controls"
        type="text"
        id="username"
        name="username"
        required
        placeholder="Ingrese nombre"
        ref={usernameRef}
      />
      <br />
      <label htmlFor="email">Correo electrónico:</label>
      <input
        className="controls"
        type="email"
        id="email"
        name="email"
        required
        placeholder="Ingrese correo electrónico"
        ref={emailRef}
      />
      <br />
      <label htmlFor="mobile">Teléfono Móvil:</label>
      <input
        className="controls"
        type="tel"
        id="mobile"
        placeholder="Ingrese número de teléfono"
        ref={mobileRef}
      />
      <br />
      <label htmlFor="number">Edad:</label>
      <input
        className="controls"
        type="number"
        id="number"
        placeholder="Ingrese edad"
        ref={ageRef}
      />
      <br />
      <label htmlFor="password">Contraseña:</label>
      <input
        className="controls"
        type="password"
        id="password"
        name="password"
        minLength={8}
        required
        placeholder="Ingrese contraseña"
        ref={passwordRef}
      />
      <br />
      <div className="registro">
      <span className="link-conte">¿tienes una cuenta?{' '}
          <span className="link" onClick={() => system.onFormSwitch('index')}><p>Inicia sesion aquí</p></span>
        </span>
      </div>
      <button class="button" type="submit" value="Registrarse">Registrarse</button>
    </form>
  );
};

export default Index0;
