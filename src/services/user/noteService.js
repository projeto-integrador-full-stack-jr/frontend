import api from '../api';

const noteService = {
    createNote: async (newNote) => {
        const response = await api.post(`/notas/minhas`, newNote);
        return response.data;
    },

    getNotes: async () => {
        const response = await api.get(`/notas/minhas`);
        return response.data;
    },

    editNote: async (id) => {
        const response = await api.post(`/notas/minhas/${id}`);
        return response.data;
    },

    deleteNote: async (id) => {
        const response = await api.delete(`/notas/minhas/${id}`);
        return response.data;
    },
};

export default noteService;
