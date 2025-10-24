import api from '../api';

const userService = {
    getUsers: async () => {
        const response = await api.get('/usuarios/listar', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    },

    getUser: async (id) => {
        const response = await api.get(`/usuarios/${id}`);
        return response.data;
    },

    updateUser: async (id) => {
        const response = await api.put(`/usuarios/${id}`);
        return response.data;
    },

    deleteUser: async (id) => {
        const response = await api.delete(`/usuarios/${id}`);
        return response.data;
    },
};

export default userService;
