import api from '../api';

const noteService = {
    createNote: async () => {
        const response = await api.post(`/notas`);
        return response.data;
    },

    getNotes: async () => {
        const response = await api.get(`/notas`);
        return response.data;
    },

    getNote: async (id) => {
        const response = await api.get(`/notas/${id}`);
        return response.data;
    },

    editNote: async (id) => {
        const response = await api.post(`/notas/${id}`);
        return response.data;
    },

    deleteNote: async (id) => {
        const response = await api.delete(`/notas/${id}`);
        return response.data;
    },
};

export default noteService;
