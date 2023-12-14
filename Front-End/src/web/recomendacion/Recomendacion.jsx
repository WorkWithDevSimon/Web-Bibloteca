import React from 'react'
import "./recomendacion.css"
import { DatosRecomendaciones } from "../../api/apisTraidas";


const Recomendacion = () => {
    const VerDatos = async () => {
        const datos = await (DatosRecomendaciones().data)
        console.log(datos)
    }

    return (
        <>
            <button onClick={VerDatos}>Boton Click</button>

        </>
    )
}

export default Recomendacion