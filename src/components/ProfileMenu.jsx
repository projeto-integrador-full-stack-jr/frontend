import React, { useEffect, useRef } from 'react';
import logo from '../assets/logo.svg';
import Button from './Button';
import { Link } from 'react-router-dom';
import {
  Wrench,
  CheckCheck,
  Album,
  CircleUserRound,
  LogOut,
  ChevronLast,
} from 'lucide-react';

const menuOptions = [
  { label: 'Editar perfil', link: '/profile', icon: <CircleUserRound /> },
  { label: 'Mentorias', link: '/mentoring', icon: <Album /> },
  { label: 'Notas', link: '/notes', icon: <CheckCheck /> },
  { label: 'Configurações', link: '/settings', icon: <Wrench /> },
];

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false); // menu inicia fechado
  const menuRef = useRef(null); // referencia de quem é o menu

  // fecha menu com um clique
  useEffect(() => {
    function handleCloseMenu(event) {
      // se o clique for fora do elemento menu e estiver aberto
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    // aqui chama a evento no clique
    document.addEventListener('mousedown', handleCloseMenu);
    return () => {
      // limpa o evento
      document.removeEventListener('mousedown', handleCloseMenu);
    };
  }, []);

  return (
    <aside
      ref={menuRef}
      className={`fixed flex h-full flex-col justify-between overflow-hidden border-2 bg-white p-4 transition-all duration-300 ease-in-out ${isOpen ? 'w-70 lg:w-1/4 lg:p-8' : 'w-22 lg:p-3'} `}
    >
      <div>
        <div className="flex flex-col items-center pb-14">
          <img
            src={logo}
            alt="Logo"
            className={isOpen ? 'w-40 lg:w-50' : 'hidden'}
          />
        </div>

        <nav className="flex flex-col gap-4 pt-10">
          {menuOptions.map((option) => (
            <Link key={option.link} to={option.link}>
              <Button
                label={isOpen ? option.label : ''}
                icon={option.icon}
                variant="tertiary"
                title={option.label}
              />
            </Link>
          ))}

          {!isOpen && (
            <Link onClick={() => setIsOpen(isOpen)} to="/">
              <Button title={'Sair'} icon={<LogOut />} variant="tertiary" />
            </Link>
          )}
        </nav>
      </div>

      <Link onClick={() => setIsOpen(!isOpen)} to={isOpen ? '/' : ''}>
        <Button
          label={isOpen ? 'Sair' : ''}
          title={isOpen ? 'Sair' : 'Abrir menu'}
          icon={isOpen ? <LogOut /> : <ChevronLast />}
          variant={isOpen ? 'danger' : 'tertiary'}
        />
      </Link>
    </aside>
  );
};

export default ProfileMenu;
