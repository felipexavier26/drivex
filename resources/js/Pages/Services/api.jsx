import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8000/api/veiculos'
});

export default api;