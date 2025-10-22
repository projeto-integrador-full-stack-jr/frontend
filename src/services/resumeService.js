import api from './api';

const token = localStorage.getItem('token');
const resumeService = {
    createResume: async () => {
        const response = await api.post(`/resumos/meus`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });
        return response.data;
    },
};

export default resumeService;
