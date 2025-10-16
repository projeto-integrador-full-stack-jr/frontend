import { useState } from 'react';
import LoginPage from './LoginPage.jsx';
import RegisterPage from './RegisterPage';
import Tabs from '../../components/Tabs';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const AuthLayout = () => {
    const [currentPage, setCurrentPage] = useState('login');

    return (
        <main className="flex min-h-screen font-sans">
            <div className="hidden min-h-screen bg-blue-600 lg:block lg:w-1/2" />

            <div className="flex flex-1 flex-col items-center justify-between lg:w-1/2">
                <header className="flex w-full items-center justify-between px-10 py-4">
                    <Link to="/">
                        <img src={Logo} alt="Logo mentoria" width={150} />
                    </Link>
                    <Link
                        to="/"
                        className="flex items-center justify-center hover:border-none"
                    >
                        página anterior
                    </Link>
                </header>

                <div className="mt-6 w-full max-w-md">
                    <Tabs
                        currentPage={currentPage}
                        onSwitchPage={setCurrentPage}
                    />
                    {currentPage === 'login' ? (
                        <LoginPage onSwitchPage={setCurrentPage} />
                    ) : (
                        <RegisterPage onSwitchPage={setCurrentPage} />
                    )}
                </div>
                <div>
                    <p className="pb-2 text-sm text-zinc-400">
                        © 2025 mentorIA. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default AuthLayout;
