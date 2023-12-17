import React from 'react'
import "./socio.css"
import LibrosOcupadosporSocios from '../../components/componenteSocios/LibrosOcupadosporSocios'
import {SociosOcupandoLibros} from "../../api/apisTraidas";
const Socios = () => {
  return (
    <>
      <LibrosOcupadosporSocios SociosOcupandoLibros={SociosOcupandoLibros} />
    </>
  )
}

export default Socios