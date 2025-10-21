import { createContext, useState, useEffect } from 'react';
import userService from '../../services/userService'; // ajusta o caminho conforme sua estrutura
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    setLoading(false);
                    return;
                }
                const response = await userService.getMe();
                setUser(response);
                console.log(response);
            } catch (error) {
                console.error('Erro ao buscar usuário logado:', error);
                localStorage.removeItem('token');
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setUser(null);
        navigate('/');
    };

    const updateUserContext = (updatedUser) => {
        setUser(updatedUser);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                logout,
                loading,
                setUser: updateUserContext,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
