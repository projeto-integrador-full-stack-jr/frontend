import api from './api';
const token = localStorage.getItem('token');

const userService = {
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
