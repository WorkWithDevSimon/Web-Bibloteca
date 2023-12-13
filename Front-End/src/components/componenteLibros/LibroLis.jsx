import React, { useEffect, useState } from 'react'
import "./libroslis.css"
const LibroLis = ({ DatosLibros, setCapturarLibros }) => {
    const [datosImport, setDatosImport] = useState([]);
    const VerDatos = async () => {
        try {
            const response = await DatosLibros();
            setDatosImport(response.data);
            console.log(response.data)
        } catch (error) {
            console.error("Error al obtener datos de usuarios:", error);
        }
    }
    useEffect(() => {
        VerDatos();
    }, []);
    const AgregarLibro = (x) => {
        setCapturarLibros([x])
    }
    return (
        <>
            <div className='BinevendiosBliboteca'>
                <h1>BIENVENIDO A LA BIBLOTECA</h1>
            </div>
            <span className="border border-primary"></span>
            <div className="contenendorLibreria">
                {datosImport.length === 0 ? (
                    <h1>No hay productos hasta el momento</h1>
                ) : (
                    datosImport.map(x => (
                        <div className="item" key={x.id}>
                            <div>
                                <div>

                                    <img
                                        src={x.imagenURL}
                                    />
                                </div>
                                <div>
                                    {x.disponible != false ? (
                                        <button className="BtnAgregarLibro" onClick={() => {
                                            AgregarLibro(x);
                                        }}>
                                            Añadir +
                                        </button>
                                    ) : (
                                        <>
                                            <p className="#">Libro no disponible</p>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="info-libros">
                                <h6>Titulo:{x.titulo}</h6>
                                <h6>Autor:{x.autor}</h6>
                                <h6>Editorial:{x.editorial}</h6>
                                <h6>Coleccion:{x.coleccion}</h6>
                                <h6>Año:{x.año}</h6>
                                <h6>Paginas:{x.paginas}</h6>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    )
}
export default LibroLis