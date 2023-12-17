import React, { useEffect, useState } from 'react';

import "./misreservas.css";

const MisReservas = ({ DatosLibros, CapturarIDusuario, DatosDeMiReservaDeLibros, EliminarReservaPorID, actualizarLibrosTraidos }) => {
    const [CapturarDatosReservas, setCapturarDatosReservas] = useState([]);
    const obtenerDatosReservas = async () => {
        const reservas = (await DatosDeMiReservaDeLibros()).data.filter(x => x.socio === CapturarIDusuario);
        setCapturarDatosReservas(reservas);
    };
    const eliminarYActualizarReserva = async (id, libroId) => {
        const datosDeLosLibros = ((await DatosLibros()).data).filter(x => x.id == libroId);
        if (id) {
            const ActualizarLibros = {
                titulo: datosDeLosLibros[0].titulo,
                autor: datosDeLosLibros[0].autor,
                editorial: datosDeLosLibros[0].editorial,
                coleccion: datosDeLosLibros[0].coleccion,
                año: datosDeLosLibros[0].año,
                paginas: datosDeLosLibros[0].paginas,
                imagenURL: datosDeLosLibros[0].imagenURL,
                disponible: true,
            };
            await actualizarLibrosTraidos(datosDeLosLibros[0].id, ActualizarLibros);
            await EliminarReservaPorID(id);
            alert("Reserva Cancelada");
            obtenerDatosReservas();
        } else {
            alert("ID de reserva no válido");
        }
    };
    useEffect(() => {
        obtenerDatosReservas();
    }, [CapturarIDusuario]);
    return (
        <div>
            <h3>Registro de mis reservas</h3>
            <table className="reservas-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Imagen del libro</th>
                        <th>Fecha de Inicio</th>
                        <th>Fecha de Devolución</th>
                        <th>Estado</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {CapturarDatosReservas.length > 0 ? (
                        CapturarDatosReservas.map((reserva) => (
                            <tr key={reserva.id}>
                                <td>{reserva.id}</td>
                                <td>{reserva.libro_titulo}</td>
                                <td>{reserva.libro_autor}</td>
                                <td><img src={reserva.libro_imagenURL} alt="Libro Imagen" width={80} /></td>
                                <td>{reserva.fecha_inicio}</td>
                                <td>{reserva.fecha_devolucion}</td>
                                <td>{reserva.estado_nombre}</td>
                                <td>
                                    <button onClick={() => eliminarYActualizarReserva(reserva.id, reserva.libro_id)} className='btn btn-danger'>
                                        Devolver Libro
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8">No hay reservas</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default MisReservas;
