import api from './api';

export const getNotes = async () => {
    try {
        const res = await api.get('/notas');
        console.log(res.data);
        return res.data;
    } catch (err) {
        console.error('Erro ao buscar notas:', err);
        throw err;
    }
};
getNotes();
