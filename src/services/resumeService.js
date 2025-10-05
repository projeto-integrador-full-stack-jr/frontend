import api from './api';

export const getSummaries = async () => {
    try {
        const res = await api.get('/resumos');
        console.log(res.data);
        return res.data;
    } catch (err) {
        console.error('Erro ao buscar resumos:', err);
        throw err;
    }
};
getSummaries();
