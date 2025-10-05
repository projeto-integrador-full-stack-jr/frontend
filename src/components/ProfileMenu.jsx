import React, { useEffect, useRef, useState } from 'react';
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
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null); // referência para saber quem é o menu

    // fecha o menu ao clicar fora
    useEffect(() => {
        const handleCloseMenu = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        // adiciona o event listener
        document.addEventListener('mousedown', handleCloseMenu);
        return () => document.removeEventListener('mousedown', handleCloseMenu); // limpa o event listener
    }, []);

    const menuWidth = isOpen ? 'w-50 lg:w-95 lg:p-8' : 'w-22 lg:p-3';

    return (
        <aside
            ref={menuRef}
            className={`relative flex h-full flex-col justify-between overflow-hidden border-r border-gray-100 p-4 transition-all duration-300 ease-in-out ${menuWidth}`}
        >
            <div className="flex flex-grow flex-col">
                <nav className="flex flex-col gap-4 pt-10">
                    {menuOptions.map(({ label, link, icon }) => (
                        <Link key={link} to={link}>
                            <Button
                                label={isOpen ? label : ''}
                                icon={icon}
                                variant="tertiary"
                                title={label}
                            />
                        </Link>
                    ))}

                    {!isOpen && (
                        <Link to="/">
                            <Button
                                title="Sair"
                                icon={<LogOut />}
                                variant="tertiary"
                            />
                        </Link>
                    )}
                </nav>
            </div>

            <div className="mt-auto">
                <Link onClick={() => setIsOpen(!isOpen)} to={isOpen ? '/' : ''}>
                    <Button
                        label={isOpen ? 'Sair' : ''}
                        title={isOpen ? 'Sair' : 'Abrir menu'}
                        icon={isOpen ? <LogOut /> : <ChevronLast />}
                        variant={isOpen ? 'danger' : 'tertiary'}
                    />
                </Link>
            </div>
        </aside>
    );
};

export default ProfileMenu;
