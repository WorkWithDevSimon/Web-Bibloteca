import React, { useState } from 'react'
import { DatosLibros } from "../../api/apisTraidas";
import LibroLis from '../../components/componenteLibros/LibroLis';
import LibroEncabezado from '../../components/componenteLibros/LibroEncabezado';

const Libros = () => {
    const [CapturarLibros, setCapturarLibros] = useState([])    
    return (
        <>
            <LibroLis DatosLibros={DatosLibros} setCapturarLibros={setCapturarLibros} />
            <LibroEncabezado CapturarLibros={CapturarLibros} />
        </>
    )
}
export default Libros

