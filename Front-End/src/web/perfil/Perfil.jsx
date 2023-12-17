import { useContext } from 'react';
import { MiContexto } from "../../context/UseProveedor";
import { useNavigate } from 'react-router-dom';
import "./perfil.css"
import MisReservas from '../../components/componentePerfil/MisReservas';

import { DatosDeMiReservaDeLibros,EliminarReservaPorID,actualizarLibrosTraidos,DatosLibros} from "../../api/apisTraidas";




const Perfil = () => {
    const { CapturarIDusuario, setCapturarIDusuario } = useContext(MiContexto);
    const navigate = useNavigate();
    const CerrarSession = () => {
        setCapturarIDusuario()
        navigate("/Iniciar-Session");
    }
    return (
        <>
            <div className="container">
                <h1 className="TituloPerfil">Mi Perfil</h1>
                <button onClick={CerrarSession} className="BotonCerrarSeccionn">
                    <ion-icon name="exit-outline"></ion-icon>Cerrar la sesión
                </button>
                <br />
                <h2  className='datosCuenta'>Datos de mi cuenta</h2>
                <div>
                    <MisReservas CapturarIDusuario={CapturarIDusuario}
                     DatosDeMiReservaDeLibros={DatosDeMiReservaDeLibros}
                     EliminarReservaPorID={EliminarReservaPorID}
                     actualizarLibrosTraidos={actualizarLibrosTraidos}
                     DatosLibros={DatosLibros} />
                </div>
            </div>
        </>
    )
}
export default Perfil