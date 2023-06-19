
import React, { useState } from "react";

export const Index3 = (system) => {
  const [marca, setMarca] = useState("Toyota");
  const [modelo, setModelo] = useState("Corolla");
  const [año, setAño] = useState("2018");
  const [color, setColor] = useState("rojo");
  const [matricula, setMatricula] = useState("0256115");

  const editarMarca = () => {
    const nuevaMarca = prompt("Ingrese la nueva marca");
    if (nuevaMarca) {
      setMarca(nuevaMarca);
    }
  };

  const editarModelo = () => {
    const nuevoModelo = prompt("Ingrese el nuevo modelo");
    if (nuevoModelo) {
      setModelo(nuevoModelo);
    }
  };

  const editarAño = () => {
    const nuevoAño = prompt("Ingrese el nuevo año");
    if (nuevoAño) {
      setAño(nuevoAño);
    }
  };

  const editarColor = () => {
    const nuevoColor = prompt("Ingrese el nuevo color");
    if (nuevoColor) {
      setColor(nuevoColor);
    }
  };
  const editarMatricula = () => {
    const nuevaMatricula = prompt("Ingrese el nuevo color");
    if (nuevaMatricula) {
      setMatricula(nuevaMatricula);
    }
  };

  return (
    <>
      <header>
        <div className="container">
          <p className="logo">Universidad laica Eloy Alfaro de Manabí</p>
          <nav>
          <a onClick={() => system.onFormSwitch('index2')}>Inicio</a>
          <a onClick={() => system.onFormSwitch('index2')}>Reportes</a>
          <a onClick={() => system.onFormSwitch('index3')}>Mi cuenta</a>
          <a onClick={() => system.onFormSwitch('index')}>Cerrar sesión</a>
          </nav>
        </div>
      </header>

      <div className="perfil">
        <h1>Perfil de usuario</h1>
        <p>Información personal:</p>
        <ul>
          <li>
            <strong>Nombre:</strong> Juan Pérez
          </li>
          <li>
            <strong>Edad:</strong> 30 años
          </li>
          <li>
            <strong>Correo electrónico:</strong> juanperez@gmail.com
          </li>
          <li>
            <strong>Teléfono:</strong> 555-1234
          </li>
          <li>
            <strong>Cédula:</strong> 1341589792
          </li>
          <li>
            <strong>Licencia:</strong> 04575525
          </li>
        </ul>
        <hr />
        <p>Información del vehículo:</p>
        <ul>
          <li>
            <strong>Marca:</strong>{" "}
            <span id="marca">{marca}</span>{" "}
            <button onClick={editarMarca}>Editar</button>
          </li>
          <li>
            <strong>Matricula:</strong>{" "}
            <span id="matricula">{matricula}</span>{" "}
            <button onClick={editarMatricula}>Editar</button>
          </li>
          <li>
            <strong>Modelo:</strong>{" "}
            <span id="modelo">{modelo}</span>{" "}
            <button onClick={editarModelo}>Editar</button>
          </li>
          <li>
            <strong>Año:</strong>{" "}
            <span id="año">{año}</span>{" "}
            <button onClick={editarAño}>Editar</button>
          </li>
          <li>
            <strong>Color:</strong>{" "}
            <span id="color">{color}</span>{" "}
            <button onClick={editarColor}>Editar</button>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Index3;
