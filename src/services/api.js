import axios from 'axios';

// Instância do Axios
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor para adicionar o token automaticamente
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // futuramente pode ser cookie HttpOnly
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Interceptor global para log de erros
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error(
            'Erro na requisição:',
            error.response?.data || error.message
        );
        return Promise.reject(error);
    }
);

export default api;
