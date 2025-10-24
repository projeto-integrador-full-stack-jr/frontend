import api from '../api';

const goalService = {
    createGoal: async () => {
        const response = await api.post(`/metas`);
        return response.data;
    },

    getGoals: async () => {
        const response = await api.get(`/metas`);
        return response.data;
    },
    getGoal: async (id) => {
        const response = await api.get(`/metas/${id}`);
        return response.data;
    },

    editGoal: async (id) => {
        const response = await api.post(`/metas/${id}`);
        return response.data;
    },

    deleteGoal: async (id) => {
        const response = await api.delete(`/metas/${id}`);
        return response.data;
    },
};

export default goalService;
