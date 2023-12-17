import React, { useState, useEffect } from 'react';
import './socioliborsocupados.css';

const LibrosOcupadosporSocios = ({ SociosOcupandoLibros }) => {
    const [datosSocios, setDatosSocios] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await SociosOcupandoLibros();
                setDatosSocios(response.data);
            } catch (error) {
                console.error('Error al obtener datos de la API:', error);
            }
        };

        fetchData();
    }, [SociosOcupandoLibros]);

    return (
        <div className="container">
            <h1 className="heading">LIBROS OCUPADOS POR LOS SOCIOS</h1>
            <table className="custom-table">
                <thead className="custom-table-header">
                    <tr>
                        <th>Socio</th>
                        <th>Libros Reservados</th>
                    </tr>
                </thead>
                <tbody>
                    {datosSocios.map((socioInfo) => (
                        <tr key={socioInfo.socio.id}>
                            <td className="socio-info">
                                <h5>{`${socioInfo.socio.nombre} ${socioInfo.socio.apellido}`}</h5>
                                <p>{`Email: ${socioInfo.socio.email}`}</p>
                                <p>{`Usuario: ${socioInfo.socio.usuario}`}</p>
                            </td>
                            <td className="libros-reservados">
                                <ul className="custom-list">
                                    {socioInfo.libros_reservados.map((libro) => (
                                        <li key={libro.id} className="custom-list-item">
                                            <div className="libro-info">
                                                <h6>{libro.titulo}</h6>
                                                <p>{`Autor: ${libro.autor}`}</p>
                                            </div>
                                            <img src={libro.imagenURL} alt={`Portada de ${libro.titulo}`} className="custom-image" />
                                        </li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LibrosOcupadosporSocios;

