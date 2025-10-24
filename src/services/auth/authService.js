import api from '../api';

const authService = {
    loginUser: async ({ email, senha }) => {
        const response = await api.post('/login', { email, senha });
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
};

export default authService;
