
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navegador from "./web/navegador/Navegador";
import Inicio from "./web/inicio/Inicio";
import {Libros} from './web/index'
 
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navegador />
        <Routes>
          <Route path='/' element={<Navigate to="/Inicio" />} />
          <Route path='/Inicio' element={<Inicio />} />
          <Route path='/Libros' element={<Libros />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App