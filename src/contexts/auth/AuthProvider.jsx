import { createContext, useState, useEffect } from 'react';
import userService from '../../services/userService';
import profileService from '../../services/profileService';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const getUserProfile = async () => {
        try {
            const response = await profileService.getProfile('/perfis/meu');
            return response.data;
        } catch (error) {
            console.error('Erro ao carregar perfil:', error);
            return null;
        }
    };

    const getProfileUser = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setLoading(false);
            return;
        }

        try {
            const userData = await userService.getMe();
            const profileData = await getUserProfile();

            const mergedUser = { ...userData, ...profileData };

            setUser(mergedUser);
            localStorage.setItem('user', JSON.stringify(mergedUser));
        } catch (error) {
            console.error('Erro ao buscar dados do usuário:', error);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProfileUser();
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('userProfile');
        setUser(null);
        navigate('/');
    };

    const updateUserContext = (updatedUser) => {
        setUser((prev) => ({ ...prev, ...updatedUser }));
        localStorage.setItem('user', JSON.stringify({ ...user, ...updatedUser }));
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                logout,
                setUser: updateUserContext,
                refreshProfile: getProfileUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
