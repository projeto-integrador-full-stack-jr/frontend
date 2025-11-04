import api from '../api';

const userService = {
    getUser: async () => {
        const response = await api.get('/usuarios/eu');
        return response.data;
    },

    updateUser: async (email, senha) => {
        const response = await api.put('/usuarios/eu', { email, senha });
        return response.data;
    },

    deleteUser: async () => {
        const response = await api.delete(`/usuarios/eu`);
        return response.data;
    },
};

export default userService;
