import React from 'react'
import "./recomendacion.css"
import {
    DatosRecomendaciones,
    datosLibrosDisponibles, datosLibrosNoDisponibles
} from "../../api/apisTraidas";
import LibroConMayorReserva from '../../components/componenteRecomednaciones/LibroConMayorReserva';
import LibrosDisponibles from '../../components/componenteRecomednaciones/LibrosDisponibles';
import LibroNoDisponibles from '../../components/componenteRecomednaciones/LibroNoDisponibles';
const Recomendaciones = () => {
    return (
        <>
            <LibroConMayorReserva DatosRecomendaciones={DatosRecomendaciones} />
            <LibrosDisponibles datosLibrosDisponibles={datosLibrosDisponibles} />
            <LibroNoDisponibles datosLibrosNoDisponibles={datosLibrosNoDisponibles} />
        </>
    );
};
export default Recomendaciones