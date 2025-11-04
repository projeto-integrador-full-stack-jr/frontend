import api from '../api';

const summaryService = {
    createSummary: async () => {
        const response = await api.post('/resumos/meus');
        return response.data;
    },

    deleteSummary: async (resumeId) => {
        const response = await api.delete(`/resumos/meus/${resumeId}`);
        return response.data;
    },

    getSummaries: async () => {
        const response = await api.get(`/resumos/meus`);
        return response.data;
    },
};

export default summaryService;
