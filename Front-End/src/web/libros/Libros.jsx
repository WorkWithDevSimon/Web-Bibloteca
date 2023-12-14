import React, { useState } from 'react'
import { DatosLibros } from "../../api/apisTraidas";
import LibroLis from '../../components/componenteLibros/LibroLis';
import LibroEncabezado from '../../components/componenteLibros/LibroEncabezado';

const Libros = () => {
    const [CapturarLibros, setCapturarLibros] = useState([])
    const [ContadorLibros, SetContadorLibros] = useState(0)
    return (
        <>
            <LibroEncabezado CapturarLibros={CapturarLibros} 
            ContadorLibros={ContadorLibros} setCapturarLibros={setCapturarLibros} SetContadorLibros={SetContadorLibros} />
            <LibroLis DatosLibros={DatosLibros}
                CapturarLibros={CapturarLibros}
                setCapturarLibros={setCapturarLibros}
                ContadorLibros={ContadorLibros}
                SetContadorLibros={SetContadorLibros} />
        </>
    )
}
export default Libros

