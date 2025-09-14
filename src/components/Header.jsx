import { Link } from 'react-router-dom';
import Navmenu from './NavMenu';
import logo from '../assets/logo.svg';
import { useLocation } from 'react-router';

const buttonStyles = {
  primary:
    'bg-[#2C49FA] hover:bg-[#102FF9] text-white font-medium px-5 py-2 rounded-md',
  secondary:
    'bg-[#2C49FA]/5 font-semi text-[#2C49FA] hover:bg-[#C3CBFD]  px-5 py-2 rounded-md font-medium',
  outline:
    'after:block after:h-0.5 after:w-0 after:bg-[#2C49FA] after:transition-all after:duration-300 hover:after:w-full text-[#2C49FA] font-medium px-5 py-2 rounded-md',
};

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="flex items-center justify-center border-b border-gray-100 px-4 py-4">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Logo mentorIA" className="w-40 cursor-pointer" />
        </Link>

        {isHome ? (
          <>
            <Navmenu />
            <div className="flex gap-2">
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
            className={`${buttonStyles.secondary} flex items-center justify-center`}
          >
            página anterior
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
