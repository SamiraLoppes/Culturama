import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001', // Porta do backend
});

export default api;
