import React from 'react'
import "./perfil.css"
import { useContext } from 'react';
import { MiContexto } from "../../context/UseProveedor";
import { useNavigate } from 'react-router-dom';

const Perfil = () => {
    const { setCapturarIDusuario } = useContext(MiContexto);
    const navigate = useNavigate();
    const CerrarSession = () => {
        setCapturarIDusuario()
        navigate("/Iniciar-Session");
    }
    return (
        <>
            <div>Perfil</div>
            <button onClick={CerrarSession}>Cerrar Session</button>
        </>
    )
}

export default Perfil