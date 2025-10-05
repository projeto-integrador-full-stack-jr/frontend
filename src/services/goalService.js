import api from './api';

export const getGoals = async () => {
    try {
        const res = await api.get('/metas');
        console.log(res.data);
        return res.data;
    } catch (err) {
        console.error('Erro ao buscar metas:', err);
        throw err;
    }
};
getGoals();
