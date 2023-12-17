import React from 'react'

import "./buscarlibro.css"
import LibrosPorAutor from '../../components/componenteBuscarLibroAutor/LibrosPorAutor'
import { datosLibros } from '../../api/apisTraidas'

const BuscarLibros = () => {
    return (
        <>
            <LibrosPorAutor datosLibros={datosLibros} />

        </>
    )
}

export default BuscarLibros