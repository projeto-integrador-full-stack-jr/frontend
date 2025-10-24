import api from '../api';

const profileService = {
    getProfile: async () => {
        const response = await api.get(`/perfis/meu`);
        return response.data;
    },

    deleteProfile: async () => {
        const response = await api.delete(`/perfis/meu`);
        return response.data;
    },

    updateProfile: async (data) => {
        const response = await api.put(`/perfis/meu`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    },
};

export default profileService;
