import React from 'react'
import "./recomendacion.css"
import { DatosRecomendaciones } from "../../api/apisTraidas";
import LibroConMayorReserva from '../../components/componenteRecomednaciones/LibroConMayorReserva';
const Recomendaciones = () => {
    return (
        <>
            <LibroConMayorReserva DatosRecomendaciones={DatosRecomendaciones} />
        </>
    );
};

export default Recomendaciones