import "./libroencabezado.css";

const LibroEncabezado = ({ CapturarLibros }) => {
    return (
        <div>
            <ul>
                {CapturarLibros.map(libro => (
                    console.log("Estos son los datos  Diego:", libro),
                    console.log("Estos son los datos  Diego:", libro.autor)
                ))}
            </ul>
        </div>
    );
}

export default LibroEncabezado;
