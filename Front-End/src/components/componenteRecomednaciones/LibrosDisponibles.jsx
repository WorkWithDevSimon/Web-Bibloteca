import React, { useEffect, useState } from 'react';
import "./librodisponible.css";

const LibrosDisponibles = ({ datosLibrosDisponibles }) => {
    const [DatosDisponiblesLibro, setDatosDisponiblesLibro] = useState([]);

    const LibrosTrue = async () => {
        setDatosDisponiblesLibro((await datosLibrosDisponibles()).data);
    };

    useEffect(() => {
        LibrosTrue();
    }, []);
    return (
        <>
            <h1 className='librosDisponibles'>Libros disponibles</h1>
            {DatosDisponiblesLibro.length ? (

                <div className='imagenLibrosDisponibles'>
                    {DatosDisponiblesLibro.map((x, index) => (
                        <div key={index} className="libroImagen">
                            <img src={x.imagenURL} alt={`Libro ${index + 1}`} />
                        </div>
                    ))}
                </div>
            ) : (
                <p>No hay libros  disponibles en este momento.</p>
            )}
        </>
    );
};

export default LibrosDisponibles;