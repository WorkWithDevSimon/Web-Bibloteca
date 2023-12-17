import axios from 'axios';

// ------------------------------------------------------------------------------------------------------------
const LibrosTraidos = axios.create({
    baseURL: "http://127.0.0.1:8000/Librerias/"
});
export const DatosLibros = () => LibrosTraidos.get("/");
export const actualizarLibrosTraidos = (id, datos) => {
    const url = `/${id}/`;
    console.log('URL de actualización:', url);
    return LibrosTraidos.put(url, datos);
};
// ------------------------------------------------------------------------------------------------------------
const LibrosRecomendados = axios.create({
    baseURL: "http://127.0.0.1:8000/libro_mas_popular/"
});
export const DatosRecomendaciones = () => LibrosRecomendados.get("/");
// ------------------------------------------------------------------------------------------------------------
const SociosTraidos = axios.create({
    baseURL: "http://127.0.0.1:8000/Socios/"
});
export const DatosSocios = () => SociosTraidos.get("/");
export const InsertarSocios = (dato) => SociosTraidos.post("/", dato);
// ----------------------
const Login = axios.create({
    baseURL: "http://127.0.0.1:8000/login/"
})
export const Logear = (dato) => Login.post("/", dato)
// ------------------------------------------------------------------------------------------------------------
const ReservasTraidas = axios.create({
    baseURL: "http://127.0.0.1:8000/Reservas/"
});
export const DatosReserva = () => ReservasTraidas.get("/");
export const InsertarReserva = (dato) => ReservasTraidas.post("/", dato);
export const EliminarReservaPorID = (id) => ReservasTraidas.delete(`/${id}/`);
// ----------------------------------------------------------------------------------------------------

const ReservasTradasPorNombreLibroEstado = axios.create({
    baseURL: "http://127.0.0.1:8000/obtener_reservas_con_libros/"
})
export const DatosDeMiReservaDeLibros = () => ReservasTradasPorNombreLibroEstado.get("/")
// ------------------------------------------------------------------------------------------------------------
const EstadosTraidas = axios.create({
    baseURL: "http://127.0.0.1:8000/Estados/"
});
export const DatosEstado = () => EstadosTraidas.get("/");
export const InsertarEstado = (dato) => EstadosTraidas.post("/", dato);
// ------------------------------------------URL QUE ME ENTREGA LOS LIBROS QUE ESTAN DISPONIBLES------------------------------------------------------------------
const LibrosDisponibles=axios.create({
    baseURL:"http://127.0.0.1:8000/LibrosDiesponiblesView/"
})
export const datosLibrosDisponibles=()=>LibrosDisponibles.get("/")
// ------------------------------------------URL QUE ME ENTREGA LOS LIBROS QUE NO ESTAN DISPONIBLES------------------------------------------------------------------

const LibrosNoDisponibles=axios.create({
    baseURL:"http://127.0.0.1:8000/LibrosNoDiesponiblesView/"
})
export const datosLibrosNoDisponibles=()=>LibrosNoDisponibles.get("/")

// ----------------------------------Libros Buscar por autor-------------------------------------------------------------
const TodosLosLibrosTraidosPorAutor=axios.create({
    baseURL:"http://127.0.0.1:8000/libros_por_autor/"
})

export const datosLibros=()=>TodosLosLibrosTraidosPorAutor.get("/")

//--------------------------------------SOcios que ocupan el libro para saber si lo tiene o no ----------------------------------------------------------------------
const TodosLosSociosQueOcupanElLibro=axios.create({
    baseURL:"http://127.0.0.1:8000/socios_con_libros_reservados/"
})
export const SociosOcupandoLibros=()=>TodosLosSociosQueOcupanElLibro.get("/")