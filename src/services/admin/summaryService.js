import api from '../api';

const summaryService = {
    createSummary: async () => {
        const response = await api.post(`/resumos/meus`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });
        return response.data;
    },

    getSummaries: async () => {
        const response = await api.get(`/resumos`);
        return response.data;
    },

    getSummary: async (id) => {
        const response = await api.get(`/resumos${id}`);
        return response.data;
    },

    deleteSummary: async (id) => {
        const response = await api.delete(`/resumos/${id}`);
        return response.data;
    },
};

export default summaryService;
