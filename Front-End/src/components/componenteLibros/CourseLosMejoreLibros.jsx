import React, { useState, useEffect } from 'react';
import './librosRecomendados.css';

const CourseLosMejoreLibros = ({ DatosRecomendaciones }) => {
    const [datosLibrosMejores, setdatosLibrosMejores] = useState([]);

    const VerDatos = async () => {
        try {
            const respuesta = await DatosRecomendaciones();
            setdatosLibrosMejores([respuesta.data]);
        } catch (error) {
            console.log("Error al obtener los datos de los mejores libros", error);
        }
    };

    useEffect(() => {
        VerDatos();
    }, []);

    return (
        <>
            <div className='containerMejorLibro'>
                {datosLibrosMejores.map((x, index) => (
                    <div className='libroContainer' key={index}>
                        <h1 className='MejorLibro'>Mejor Libro</h1>
                        <img className='imagenLibro' src={x.libro.imagenURL} alt={x.libro.titulo} />
                        <h5 className='tituloLibro'>Titulo:{x.libro.titulo}</h5>
                        <h5 className='autorLibro'>Autor:{x.libro.autor}</h5>
                        <h5 className='autorLibro'>Numeros de reservas:{x.num_reservas}</h5>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CourseLosMejoreLibros;