// LibrosPorAutor.js
import React, { useEffect, useState } from 'react';
import "./librosautor.css"

const LibrosPorAutor = ({ datosLibros }) => {
    const [obtenerDatosPorAutor, setObtenerDatosPorAutor] = useState([]);
    const [autorFiltrado, setAutorFiltrado] = useState('');
    const [librosFiltrados, setLibrosFiltrados] = useState([]);

    const obtenerDatosAutor = async () => {
        try {
            const response = await datosLibros();
            setObtenerDatosPorAutor(response.data);
        } catch (error) {
            console.error('Error al obtener datos del autor:', error);
        }
    };

    const filtrarLibrosPorAutor = () => {
        const librosFiltrados = obtenerDatosPorAutor.filter(
            (libro) => libro.autor.toLowerCase().includes(autorFiltrado.toLowerCase())
        );
        setLibrosFiltrados(librosFiltrados);
    };

    useEffect(() => {
        obtenerDatosAutor();
    }, []);

    return (
        <div className='libros-por-autor-container'>
            <div className='title-container'>
                <h1> Libros por Autor</h1>
            </div>
            <input
                type="text"
                name="autor"
                placeholder="Ingrese el nombre del autor"
                value={autorFiltrado}
                onChange={(e) => setAutorFiltrado(e.target.value)}
                className='autor-input'
            />
            <button onClick={filtrarLibrosPorAutor} className='filtrar-button'>Buscar <ion-icon name="search-outline"></ion-icon></button>
            {librosFiltrados.length ? (
                <div className='imagen-libros-disponibles'>
                    {librosFiltrados.map((x, index) => (
                        <div key={index} className="libro-imagen">
                            <img src={x.imagenURL} alt={`Libro ${index + 1}`} />
                        </div>
                    ))}
                </div>
            ) : (
                <p className='mensaje-libros-disponibles'>Si necesitas buscar algún libro, hazlo por aquí.</p>
            )}
        </div>
    );
};

export default LibrosPorAutor;
