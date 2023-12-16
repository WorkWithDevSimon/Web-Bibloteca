import React, { createContext, useState } from 'react'


export const MiContexto = createContext();

export const UseProveedor = ({ children }) => {
    const [CapturarIDusuario, setCapturarIDusuario] = useState();
    return (
        <MiContexto.Provider value={{ setCapturarIDusuario, CapturarIDusuario }}>
            {children}
        </MiContexto.Provider>
    )
}
