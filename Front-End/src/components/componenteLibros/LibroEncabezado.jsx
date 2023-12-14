import React, { useState } from 'react';
import "./libroencabezado.css";

const LibroEncabezado = ({ CapturarLibros, ContadorLibros, SetContadorLibros, setCapturarLibros }) => {
    const [activo, setActivo] = useState(true);
    const EliminarLibros = (valor) => {
        const nuevaListaLibros = CapturarLibros.filter(libro => libro.id !== valor.id);
        setCapturarLibros(nuevaListaLibros);
        SetContadorLibros(((ContadorLibros) - 1));
    };

    const comprarProducto = () => {
        SetContadorLibros(0);

    };
console.log("Estos son los libros", CapturarLibros)
    return (
        <>
            <header id='HeaderComponente'>
                <div className="container-icon">
                    <div className="container-cart-icon" onClick={() => setActivo(!activo)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="icon-cart"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                            />
                        </svg>
                        <div className="count-products">
                            <span id="contador-productos">{ContadorLibros}</span>
                        </div>
                    </div>
                    <div className={`container-cart-products ${activo ? "" : "hidden-cart"}`}>
                        {CapturarLibros.length ? (
                            <>
                                <p style={{ fontSize: '18px', color: '#000', fontWeight: 'bold', textAlign: 'center' }}>
                                    ¡Encuentra lo que te inspira y adquiere productos de calidad!
                                </p>
                                <div className="row-product">
                                    {CapturarLibros.map((valor) => (
                                        <div className="cart-product" key={valor.id}>
                                            <div className="info-cart-product">
                                                <span className="cantidad-producto-carrito">
                                                    <img
                                                        src={valor.imagenURL} style={{ width: "100px" }}
                                                    />
                                                </span>
                                                <p> {valor.titulo}</p>
                                            </div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="icon-close"
                                                onClick={() => EliminarLibros(valor)}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    ))}
                                </div>

                                <div className="button-container">
                                    <div className="button-container">
                                        <button className='btn-clear-all' onClick={comprarProducto} >Confirmar Comprar</button>
                                    </div>
                                </div>

                            </>
                        ) : (
                            <p className="cart-empty">El carrito está vacío</p>
                        )}
                    </div>
                </div>
            </header>
        </>
    );
};
export default LibroEncabezado;
