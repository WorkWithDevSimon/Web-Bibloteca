import React from 'react'
import "./recomendacion.css"
import { DatosRecomendaciones } from "../../api/apisTraidas";


const Recomendacion = () => {
    const VerDatos = async () => {
        await DatosRecomendaciones().then(response => console.log(response))
    }

    return (
        <>
            <button onClick={VerDatos}>Boton Click</button>

        </>
    )
}

export default Recomendacion