import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navegador from "./web/navegador/Navegador";
import { Libros, Inicio, CrearCuenta, IniciarSession, Perfil } from './web/index'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navegador />
        <Routes>
          <Route path='/' element={<Navigate to="/Inicio" />} />
          <Route path='/Inicio' element={<Inicio />} />
          <Route path='/Libros' element={<Libros />} />
          <Route path='/Crear-Cuenta' element={<CrearCuenta />} />
          <Route path='/Iniciar-Session' element={<IniciarSession />} />
          <Route path='/Perfil' element={<Perfil />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App