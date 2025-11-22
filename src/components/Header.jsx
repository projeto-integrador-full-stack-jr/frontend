import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navmenu from './NavMenu';
import logo from '../assets/logo.svg';
import { useLocation } from 'react-router';
import UserProfileDropdown from './UserProfileDropdown';
import { useAuth } from '../contexts/auth/AuthProvider';
import { Menu, X } from 'lucide-react';

const buttonStyles = {
    primary: 'bg-[#2C49FA] hover:bg-[#102FF9] text-white font-medium px-5 py-2 rounded-md  text-center',
    secondary:
        'bg-[#2C49FA]/5 font-semi text-[#2C49FA] text-[#2C49FA] hover:bg-[#C3CBFD] px-5 py-2 rounded-md font-medium',
    outline:
        'relative inline-block text-[#2C49FA] font-medium px-5 py-2 rounded-md after:block after:h-0.5 after:w-0 after:bg-[#2C49FA] after:transition-all after:duration-300 hover:after:w-full text-center',
};

const Header = () => {
    const location = useLocation();
    const { user } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const isHome = location.pathname === '/';
    const isAuthPage = location.pathname.startsWith('/auth');

    const hideLogoRoutes = ['/configuracoes', '/editar-perfil', '/notas', '/metas', '/resumos'];
    const shouldHideLogo = hideLogoRoutes.includes(location.pathname);
    

    return (
        <header className="flex w-full items-center justify-between border-b border-gray-200 px-5 py-4">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
                {!shouldHideLogo && (
                    <Link to="/">
                        <img src={logo} alt="Logo mentorIA" className={!shouldHideLogo && 'w-30'} />
                    </Link>
                )}

                {isHome ? (
                    <>
                        <button className="rounded-md bg-blue-50 p-2 lg:hidden" onClick={() => setIsOpen(true)}>
                            <Menu size={28} className="text-blue-600" />
                        </button>

                        <div className="mx-auto hidden min-w-fit items-center justify-between lg:flex">
                            <Navmenu />
                        </div>
                        <div className="hidden min-w-fit gap-2 md:flex">
                            <Link to="/auth" className={buttonStyles.outline}>
                                Fazer login
                            </Link>
                            <Link to="/auth" className={buttonStyles.primary}>
                                Cadastrar
                            </Link>
                        </div>

                        {isOpen && (
                            <div className="fixed inset-0 z-[9999] bg-white/40 backdrop-blur-sm lg:hidden">
                                <div className="absolute top-0 right-0 flex h-full w-80 flex-col gap-6 bg-white p-6 shadow-xl">
                                    <button className="ml-auto text-gray-500" onClick={() => setIsOpen(false)}>
                                        <X className="text-red-600" />
                                    </button>

                                    <Navmenu />

                                    <div className="flex flex-col gap-2">
                                        <Link
                                            to="/auth"
                                            className={buttonStyles.outline}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Fazer login
                                        </Link>
                                        <Link
                                            to="/auth?mode=register"
                                            className={buttonStyles.primary}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Cadastrar
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <>
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
