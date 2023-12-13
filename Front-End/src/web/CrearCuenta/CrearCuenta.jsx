import React, { useState } from 'react';
import './CrearCuenta.css';
import { InsertarSocios } from "../../api/apisTraidas";

const CrearCuenta = () => {
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    email: '',
    usuario: '',
    password: '',
  });
  const DatosIngresados = (e) => {
    const { name, value } = e.target;
    setDatos((prevDatos) => ({
      ...prevDatos,
      [name]: value,
    }));
  };

  const guardar = async (e) => {
    e.preventDefault();
    await InsertarSocios(datos);
  };
  return (
    <>
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: '#000' }}>
                Bienvenido  <br />
                <span style={{ color: '#000' }}>a la libreria</span>
              </h1>
              <p>¡Bienvenido a la maravillosa librería El Rincón del Pensamiento!
              </p>
              <p  >
                Nos llena de alegría darte la más cordial bienvenida a nuestro acogedor rincón literario, donde los libros son portales hacia mundos inexplorados y las historias son el alma que da vida a cada estantería. En el rincón del Pensamiento, nos enorgullece ser mucho más que un simple espacio lleno de libros; somos un santuario para aquellos que encuentran la magia en las páginas y descubren tesoros entre las letras.
              </p>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            name="nombre"
                            className="form-control"
                            value={datos.nombre}
                            onChange={DatosIngresados}
                          />
                          <label className="form-label" htmlFor="nombre">
                            Nombre
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            name="apellido"
                            className="form-control"
                            value={datos.apellido}
                            onChange={DatosIngresados}
                          />
                          <label className="form-label" htmlFor="apellido">
                            Apellido
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={datos.email}
                        onChange={DatosIngresados}
                      />
                      <label className="form-label" htmlFor="email">
                        Email
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        name="usuario"
                        className="form-control"
                        value={datos.usuario}
                        onChange={DatosIngresados}
                      />
                      <label className="form-label" htmlFor="usuario">
                        Usuario
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={datos.password}
                        onChange={DatosIngresados}
                      />
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                    </div>
                    <button type="submit" className="btnCrearCuenta" onClick={guardar}>
                      Crear
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CrearCuenta;
