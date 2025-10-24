import api from '../api';

const goalService = {
    createGoal: async () => {
        const response = await api.post(`/metas/minhas`);
        return response.data;
    },

    getGoals: async () => {
        const response = await api.get(`/metas/minhas`);
        return response.data;
    },

    editGoal: async (id) => {
        const response = await api.post(`/metas/minhas/${id}`);
        return response.data;
    },

    deleteGoal: async (id) => {
        const response = await api.delete(`/metas/minhas${id}`);
        return response.data;
    },
};

export default goalService;
