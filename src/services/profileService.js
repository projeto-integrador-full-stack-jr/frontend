import api from './api';

export const getProfiles = async () => {
    try {
        const res = await api.get('/perfis');
        console.log(res.data);
        return res.data;
    } catch (err) {
        console.error('Erro ao buscar perfis:', err);
        throw err;
    }
};
getProfiles();
