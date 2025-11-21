import { Link } from 'react-scroll';

const navStyles = {
    style: 'cursor-pointer flex text-zinc-400  hover:text-blue-600 text-sm w-full justify-center items-center py-3 text-zinc-500 lg:w-fit',
};

const Navmenu = () => {
    return (
        <nav className="flex w-full flex-col items-center justify-center gap-8 text-center md:flex-row md:justify-end">
            <Link to="#home" smooth={true} duration={500} className={navStyles.style}>
                Início
            </Link>
            <Link to="about" smooth={true} duration={500} className={navStyles.style}>
                Sobre
            </Link>
            <Link to="#about" smooth={true} duration={500} className={navStyles.style}>
                Funcionalidades
            </Link>
            <Link to=" " smooth={true} duration={500} className={navStyles.style}>
                Depoimentos
            </Link>
            <Link to="#faq" smooth={true} duration={500} className={navStyles.style}>
                Dúvidas
            </Link>
            <Link to="#contact" smooth={true} duration={500} className={navStyles.style}>
                Contato
            </Link>
        </nav>
    );
};

export default Navmenu;
