import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
    const token = localStorage.getItem('token');

    if (token) {
        return <Navigate to="/mentoria" replace />;
    } else {
        <Navigate to="/auth" />;
    }

    if (token) {
        return <Navigate to="/mentoria" replace />;
    }

    return <Outlet />;
};

export default PublicRoute;
