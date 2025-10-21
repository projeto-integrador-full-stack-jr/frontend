import api from './api';

const profileService = {
    getProfile: async () => {
        const response = await api.get(`/perfis/meu`);
        return response.data;
    },

    deleteProfile: async () => {
        const response = await api.delete(`/perfis/meu`);
        return response.data;
    },

    updateProfile: async () => {
        const response = await api.post(`/perfis/meu`);
        return response.data;
    },
};

export default profileService;
