import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserServices } from '../../services';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const getUserProfile = async () => {
        try {
            const response = await UserServices.profileService.getProfile();
            return response;
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
            const userData = await UserServices.userService.getUser();
            const profileData = await getUserProfile();

            if (!profileData) {
                return null;
            }

            const mergedUser = { ...userData, ...profileData };

            setUser(mergedUser);
            localStorage.setItem('user', JSON.stringify(mergedUser));
            return mergedUser;
        } catch (error) {
            console.error('Erro ao buscar dados do usuário:', error);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');

        if (token && storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
            } catch (error) {
                console.error(error);
            }
        }

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
