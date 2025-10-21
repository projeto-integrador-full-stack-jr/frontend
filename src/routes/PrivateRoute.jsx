// PrivateRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth/AuthProvider.jsx';

const PrivateRoute = ({ roles = [] }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) return null;

    if (!user) return <Navigate to="/auth" replace />;

    if (user.acesso === 'ADMIN') return <Outlet />;

    if (roles.length && !roles.includes(user.acesso)) {
        return <Navigate to="/mentoria" replace />;
    }

    return <Outlet />;
};

export default PrivateRoute;
