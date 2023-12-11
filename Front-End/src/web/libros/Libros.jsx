import React, { useEffect } from 'react'
import { DatosLibros } from "../../api/apisTraidas";
import "./libros.css"
const Libros = () => {
    const VerDatos = async () => {
        const respuesta = (await DatosLibros()).data;
        console.log(respuesta);
    }
    useEffect(() => {
        VerDatos();
    }, []);

    return (
        <>
            <div>Hola este es el apartado de libros</div>
            <div>
                <button className='BotonVer' onClick={VerDatos}>Traer Datos</button>
            </div>
        </>
    )
}
export default Libros