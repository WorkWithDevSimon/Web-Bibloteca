import axios from 'axios';

// ------------------------------------------------------------------------------------------------------------
const LibrosTraidos = axios.create({
    baseURL: "http://127.0.0.1:8000/Librerias/"
});
export const DatosLibros = () => LibrosTraidos.get("/");
// ------------------------------------------------------------------------------------------------------------
const SociosTraidos = axios.create({
    baseURL: "http://127.0.0.1:8000/Socios/"
});
export const DatosSocios = () => SociosTraidos.get("/");
export const InsertarSocios = (dato) => SociosTraidos.post("/", dato);
// ------------------------------------------------------------------------------------------------------------
const ReservasTraidas = axios.create({
    baseURL: "http://127.0.0.1:8000/Socios/"
});
export const DatosReserva = () => ReservasTraidas.get("/");
export const InsertarReserva = (dato) => ReservasTraidas.post("/", dato);
// ------------------------------------------------------------------------------------------------------------
const EstadosTraidas = axios.create({
    baseURL: "http://127.0.0.1:8000/Socios/"
});
export const DatosEstado = () => EstadosTraidas.get("/");
export const InsertarEstado = (dato) => EstadosTraidas.post("/", dato);










