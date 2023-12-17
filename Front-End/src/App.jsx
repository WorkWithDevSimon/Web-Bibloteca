import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navegador from "./web/navegador/Navegador";
import { Libros, Inicio, CrearCuenta, IniciarSession, Perfil,Recomendaciones,BuscarLibros,Socios } from './web/index'
import { UseProveedor } from "./context/UseProveedor";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <UseProveedor>
          <Navegador />
          <Routes>
            <Route path='/' element={<Navigate to="/Inicio" />} />
            <Route path='/Inicio' element={<Inicio />} />
            <Route path='/Libros' element={<Libros />} />
            <Route path='/BuscarLibros' element={<BuscarLibros />} />
            <Route path='/Recomendaciones' element={<Recomendaciones />} />
            <Route path='/Crear-Cuenta' element={<CrearCuenta />} />
            <Route path='/Socio' element={<Socios />} />
            <Route path='/Iniciar-Session' element={<IniciarSession />} />
            <Route path='/Perfil' element={<Perfil />} />
          </Routes>
        </UseProveedor>
      </BrowserRouter>
    </>
  )
}
export default App