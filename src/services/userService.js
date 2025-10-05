import api from './api';

export const getUsers = async () => {
    try {
        const res = await api.get('/usuarios');
        console.log(res.data);
        return res.data;
    } catch (err) {
        console.error('Erro ao buscar usuários:', err);
        throw err;
    }
};
getUsers();
