import React, { useEffect, useState } from 'react';
import './libronoDisponible.css';

const LibroNoDisponibles = ({ datosLibrosNoDisponibles }) => {
    const [DatosNoDisponiblesLibro, setDatosNoDisponiblesLibro] = useState([]);

    const LibrosTrue = async () => {
        const data = await datosLibrosNoDisponibles();
        setDatosNoDisponiblesLibro(data.data || []); // Si no hay datos, establece un array vacío
    };

    useEffect(() => {
        LibrosTrue();
    }, []);

    return (
        <>
            <h1 className='librosNoDisponibles'>Libros no disponibles</h1>
            {DatosNoDisponiblesLibro.length ? (
                <div className='imagenLibrosNoDisponibles'>
                    {DatosNoDisponiblesLibro.map((x, index) => (
                        <div key={index} className="libroImagen">
                            <img src={x.imagenURL} alt={`Libro ${index + 1}`} />
                        </div>
                    ))}
                </div>
            ) : (
                <p>No hay libros no disponibles en este momento.</p>
            )}
        </>
    );
};

export default LibroNoDisponibles;
