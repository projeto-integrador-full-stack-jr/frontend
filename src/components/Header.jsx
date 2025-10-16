import { Link } from 'react-router-dom';
import Navmenu from './NavMenu';
import logo from '../assets/logo.svg';
import { useLocation } from 'react-router';
import UserProfileDropdown from './UserProfileDropdown';

const buttonStyles = {
    primary:
        'bg-[#2C49FA] hover:bg-[#102FF9] text-white font-medium px-5 py-2 rounded-md',
    secondary:
        'bg-[#2C49FA]/5 font-semi text-[#2C49FA] hover:bg-[#C3CBFD]  px-5 py-2 rounded-md font-medium',
    outline:
        'relative inline-block text-[#2C49FA] font-medium px-5 py-2 rounded-md after:block after:h-0.5 after:w-0 after:bg-[#2C49FA] after:transition-all after:duration-300 hover:after:w-full',
};

const Header = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <header className="flex items-center border-b border-gray-100 px-4 py-4 lg:justify-center">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-center lg:justify-between">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Logo mentorIA"
                        className="w-50 cursor-pointer lg:w-40"
                    />
                </Link>

                {isHome ? (
                    <>
                        <Navmenu />
                        <div className="hidden gap-2 lg:flex">
                            <Link to="/auth" className={buttonStyles.outline}>
                                Fazer login
                            </Link>
                            <Link to="/auth" className={buttonStyles.primary}>
                                Cadastrar
                            </Link>
                        </div>
                    </>
                ) : (
                    <Link
                        to="/"
                        className={`${buttonStyles.outline} flex items-center justify-center`}
                    >
                        página anterior
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;
