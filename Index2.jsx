import React from "react";

export const Index2 = (system) => {
    const scrollToReportes = () => {
        const reportesSection = document.getElementById('reportes');
        reportesSection.scrollIntoView({ behavior: 'smooth' });
      };
  return (
    <>
      <header>
        <div className="container">
          <p className="logo">Universidad laica Eloy Alfaro de Manabí</p>
          <nav>
          <a onClick={() => system.onFormSwitch('index2')}>Inicio</a>
          <a onClick={scrollToReportes}>Reportes</a>
            <a onClick={() => system.onFormSwitch('index3')}>Mi cuenta</a>
            <a onClick={() => system.onFormSwitch('index')}>Cerrar sesión</a>

          </nav>
        </div>
      </header>

      <section id="hero">
        <h1>
          Escanea tu código QR para poder<br />
          ingresar con tu vehículo a Uleam
        </h1>
        <div className="codigo">
          <div className="img-container"></div>
        </div>
      </section>

      <section id="reportes">
        <div className="container">
          <h2>Reportes</h2>
          <div className="report">
            <div className="carta">
              <h3>Uso de las instalaciones</h3>
              <p>
                Horas transcurridas en esta semana <br />
                dentro de las instalaciones: 2 horas
              </p>
            </div>
            <div className="carta">
              <h3>Salidas</h3>
              <p>
                Fecha de salida: <br />
                08/05/2023 <br />
                Hora de salida: <br />
                10:00
              </p>
            </div>
            <div className="carta">
              <h3>Entradas</h3>
              <p>
                Fecha de entrada: <br />
                08/05/2023 <br />
                Hora de entrada: <br />
                8:00
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Index2;
