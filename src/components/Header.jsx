import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navmenu from './NavMenu';
import logo from '../assets/logo.svg';
import { useLocation } from 'react-router';
import UserProfileDropdown from './UserProfileDropdown';
import { useAuth } from '../contexts/auth/AuthProvider';

const buttonStyles = {
    primary: 'bg-[#2C49FA] hover:bg-[#102FF9] text-white font-medium px-5 py-2 rounded-md',
    secondary:
        'bg-[#2C49FA]/5 font-semi text-[#2C49FA] text-[#2C49FA] hover:bg-[#C3CBFD] px-5 py-2 rounded-md font-medium',
    outline:
        'relative inline-block text-[#2C49FA] font-medium px-5 py-2 rounded-md after:block after:h-0.5 after:w-0 after:bg-[#2C49FA] after:transition-all after:duration-300 hover:after:w-full',
};

const Header = () => {
    const location = useLocation();
    const { user } = useAuth();

    const isHome = location.pathname === '/';
    const isAuthPage = location.pathname.startsWith('/auth');

    return (
        <header className="flex w-full items-center border-b border-gray-200 px-5 py-4">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
                <Link to="/">
                    <img src={logo} alt="Logo mentorIA" className="w-30 cursor-pointer lg:w-40" />
                </Link>

                {/* Paginá inicial */}
                {isHome ? (
                    <>
                        <Navmenu />

                        <div className="hidden gap-2 lg:flex">
                            <Link to="/auth" className={buttonStyles.outline}>
                                Fazer login
                            </Link>
                            <Link to="/auth?mode=register" className={buttonStyles.primary}>
                                Cadastrar
                            </Link>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Se estiver em /auth → nunca mostrar dropdown */}
                        {isAuthPage ? (
                            <Link className={buttonStyles.secondary} to="/">
                                voltar
                            </Link>
                        ) : (
                            <>
                                {!user ? (
                                    <Link className={buttonStyles.secondary} to="/">
                                        voltar
                                    </Link>
                                ) : (
                                    <UserProfileDropdown />
                                )}
                            </>
                        )}
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
