import React from 'react'
import { Link } from 'react-router-dom'

const Navegador = () => {
  return (
    <>
      <Link to="/Inicio">Inicio</Link>
      <br /><Link to="/Libros">Libros</Link>
    </>
  )
}
export default Navegador