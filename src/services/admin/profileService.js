import api from '../api';

const profileService = {
    createProfile: async () => {
        const response = await api.post(`/perfis`);
        return response.data;
    },

    getProfiles: async () => {
        const response = await api.get(`/perfis`);
        return response.data;
    },

    getProfile: async (id) => {
        const response = await api.get(`/perfis/${id}`);
        return response.data;
    },

    deleteProfile: async (id) => {
        const response = await api.delete(`/perfis${id}`);
        return response.data;
    },

    updateProfile: async (id) => {
        const response = await api.put(`/perfis/${id}`);
        return response.data;
    },
};

export default profileService;
