import api from './api';

const userService = {
    createUser: async ({ email, senha }) => {
        const response = await api.post('/usuarios', {
            email,
            senha,
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
};

export default userService;
