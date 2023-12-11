import axios from 'axios';

const LibrosTraidos = axios.create({
    baseURL: "http://127.0.0.1:8000/Librerias/"
});
export const DatosLibros = () => LibrosTraidos.get("/");