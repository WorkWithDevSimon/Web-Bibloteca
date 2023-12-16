// Navegador.js
import { Link } from 'react-router-dom';
import './Navegador.css';
import { MiContexto } from "../../context/UseProveedor";
import { useContext } from 'react';

const Menu = () => (
  <>
    <Link to="/Inicio">Inicio</Link>
    <Link to="/Libros">Libros</Link>
    <Link to="/Recomendaciones">Recomendaciones</Link>
  </>
);
const Navegador = () => {
  const { CapturarIDusuario } = useContext(MiContexto);
  return (
    <div className="navegador">
      <div className="navegador-links">
        <div className="navegador-links_logo">
        </div>
        <div className="navegador-links_container">
          <Menu />
        </div>
      </div>
      <div className="navegador-sign">
        {CapturarIDusuario ? (
          <>
            <Link to="/Perfil">
              <ion-icon name="person-outline"></ion-icon>
            </Link>
            <p style={{ color: 'white' }}></p>
          </>
        ) : (
          <>
            <Link to="/Iniciar-Session">
              <button type='button'>INICIAR SESIÓN</button>
            </Link>
            <Link to="/Crear-Cuenta">
              <button type="button">REGISTRARSE</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
export default Navegador;
