import React, { useContext, useState } from 'react';
import './iniciarSession.css'; // Importa el archivo CSS con los estilos
import { Logear } from "../../api/apisTraidas";
import { MiContexto } from "../../context/UseProveedor";
import { useNavigate } from 'react-router-dom';


const IniciarSesion = () => {
  const [datosIniciarSesion, setDatosIniciarSesion] = useState({
    nombre: '',
    apellido: '',
    usuario: '',
    password: '',
  });
  const navigate = useNavigate();
  const { setCapturarIDusuario } = useContext(MiContexto);
  const DatosExtraidos = (e) => {
    const { name, value } = e.target;
    setDatosIniciarSesion((prevDatos) => ({
      ...prevDatos,
      [name]: value,
    }));
  };
  const DatosInciarSession = async (e) => {
    e.preventDefault()
    try {
      const IdUsuario = (await Logear(datosIniciarSesion)).data
      setCapturarIDusuario(IdUsuario.socio)
      navigate("/Perfil");

    } catch (error) {
      alert(error.response.data.error)
    }
  };

  return (
    <>
      <section className="sesescionIniciarSession">
        <div className="container py-4">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card cascading-right">
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">INICIAR SESIÓN</h2>
                  <form  >
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            name="nombre"
                            className="form-control"
                            value={datosIniciarSesion.nombre}
                            onChange={DatosExtraidos}
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
                            value={datosIniciarSesion.apellido}
                            onChange={DatosExtraidos}
                          />
                          <label className="form-label" htmlFor="apellido">
                            Apellido
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        name="usuario"
                        className="form-control"
                        value={datosIniciarSesion.usuario}
                        onChange={DatosExtraidos}
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
                        value={datosIniciarSesion.password}
                        onChange={DatosExtraidos}
                      />
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                    </div>
                    <button type="submit" className="BotonIngresar" onClick={DatosInciarSession}>
                      Ingresar
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0">
              <img
                src="https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-100 rounded-4 shadow-4"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IniciarSesion;
