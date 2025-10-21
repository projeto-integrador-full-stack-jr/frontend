import api from './api';
const token = localStorage.getItem('token');

const userService = {
    getUserById: async (id, token) => {
        const response = await api.delete(`/usuarios/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    },

    getAllUsers: async () => {
        const token = localStorage.getItem('token');
        const response = await api.get('/usuarios/listar', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    },

    updateUserById: async (id, userData, token) => {
        const response = await api.put(`/usuarios/${id}`, userData, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    },

    deleteUser: async (id) => {
        const response = await api.delete(`/usuarios/${id}`);
        return response.data;
    },

    createUser: async ({ email, senha }) => {
        const response = await api.post('/usuarios', {
            email,
            senha,
            acesso: 'USER',
        });
        return response.data;
    },

    getUser: async ({ email, senha }) => {
        const response = await api.post('/login', {
            email,
            senha,
        });
        return response.data;
    },

    getMe: async () => {
        const response = await api.get('/usuarios/eu');
        return response.data;
    },

    updateUser: async (email, senha) => {
        const response = await api.put(
            '/usuarios/eu',
            { email, senha },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        return response.data;
    },
};

export default userService;
