import React, { useContext, useState } from 'react';
import { DatosLibros,InsertarReserva,DatosEstado,actualizarLibrosTraidos} from '../../api/apisTraidas';
import LibroLis from '../../components/componenteLibros/LibroLis';
import LibroEncabezado from '../../components/componenteLibros/LibroEncabezado';
import './Libros.css';
 
import { MiContexto } from "../../context/UseProveedor";
import { useNavigate } from 'react-router-dom';

const Libros = () => {
    const [CapturarLibros, setCapturarLibros] = useState([]);
    const [ContadorLibros, SetContadorLibros] = useState(0);
    const {CapturarIDusuario}= useContext(MiContexto)
    return (
        <>
            <div className='BinevendiosBliboteca'>
                <h1>BIENVENIDO A LA BIBLOTECA</h1>
            </div>
             <LibroEncabezado
                CapturarLibros={CapturarLibros}
                ContadorLibros={ContadorLibros}
                setCapturarLibros={setCapturarLibros}
                SetContadorLibros={SetContadorLibros}
                CapturarIDusuario={CapturarIDusuario}
                InsertarReserva={InsertarReserva}
                DatosEstado={DatosEstado}
                actualizarLibrosTraidos={actualizarLibrosTraidos}
                useNavigate={useNavigate}
            />
            <LibroLis
                DatosLibros={DatosLibros}
                CapturarLibros={CapturarLibros}
                setCapturarLibros={setCapturarLibros}
                ContadorLibros={ContadorLibros}
                SetContadorLibros={SetContadorLibros}
            />
        </>
    );
};

export default Libros;
