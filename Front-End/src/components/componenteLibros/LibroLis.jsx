import React, { useEffect, useState } from 'react'
import "./libroslis.css"
const LibroLis = ({ DatosLibros, setCapturarLibros, CapturarLibros, ContadorLibros, SetContadorLibros }) => {
    const [datosImport, setDatosImport] = useState([]);
    const VerDatos = async () => {
        try {
            const response = await DatosLibros();
            setDatosImport(response.data);
        } catch (error) {
            console.error("Error al obtener datos de usuarios:", error);
        }
    }
    useEffect(() => {
        VerDatos();
    }, []);
    const AgregarLibro = (x_entregada) => {
        const libroExistente = CapturarLibros.find(valorx => valorx.id === x_entregada.id);

        if (!libroExistente) {
            setCapturarLibros([...CapturarLibros, x_entregada]);
            SetContadorLibros((ContadorLibros) + 1);
        } else {
            alert("El libro ya existe en tu Reserva de Lecturas");
        }
    }
    return (
        <>
            <div className='BinevendiosBliboteca'>
                <h1>BIENVENIDO A LA BIBLOTECA</h1>
            </div>
            <span className="border border-primary"></span>
            <div className="contenendorLibreria">
                {datosImport.length === 0 ? (
                    <h1>No hay libros hasta el momento</h1>
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
                                            <p className="LibrosNoDisponiblesVer">Libro no disponible</p>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="info-libros">
                                <p>Titulo:{x.titulo}</p>
                                <p>Autor:{x.autor}</p>
                                <p>Editorial:{x.editorial}</p>
                                <p>Coleccion:{x.coleccion}</p>
                                <p>Año:{x.año}</p>
                                <p>Paginas:{x.paginas}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    )
}
export default LibroLis