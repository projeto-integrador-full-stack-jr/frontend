import api from '../api';

const summaryService = {
    createSummary: async () => {
        const response = await api.post('/resumos/meus');
        return response.data;
    },

    deleteSummary: async (id) => {
        const response = await api.delete(`/resumos/meus/${id}`);
        return response.data;
    },

    getAllSummaries: async () => {
        const response = await api.get(`/resumos/meus`);
        return response.data;
    },
};

export default summaryService;
