import React, { useState } from 'react';
import { DatosLibros, DatosRecomendaciones } from '../../api/apisTraidas';
import LibroLis from '../../components/componenteLibros/LibroLis';
import LibroEncabezado from '../../components/componenteLibros/LibroEncabezado';
import './Libros.css';
import CourseLosMejoreLibros from '../../components/componenteLibros/CourseLosMejoreLibros';

const Libros = () => {
    const [CapturarLibros, setCapturarLibros] = useState([]);
    const [ContadorLibros, SetContadorLibros] = useState(0);
    return (
        <>
            <div className='BinevendiosBliboteca'>
                <h1>BIENVENIDO A LA BIBLOTECA</h1>
            </div>
            <CourseLosMejoreLibros DatosRecomendaciones={DatosRecomendaciones} />
            <LibroEncabezado
                CapturarLibros={CapturarLibros}
                ContadorLibros={ContadorLibros}
                setCapturarLibros={setCapturarLibros}
                SetContadorLibros={SetContadorLibros}
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
