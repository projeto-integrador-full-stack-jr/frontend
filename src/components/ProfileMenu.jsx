import React, { useEffect, useState } from 'react';
import Button from './Button';
import { NavLink } from 'react-router-dom';
import { Settings, NotebookText, Goal, Album, CircleUserRound, ChevronLast, LogOut } from 'lucide-react';
import logo from '../assets/logo.svg';

const menuOptions = [
    { label: 'Mentorias', link: '/resumos', icon: <Album size={20} /> },
    { label: 'Metas', link: '/metas', icon: <Goal size={20} /> },
    { label: 'Notas', link: '/notas', icon: <NotebookText size={20} /> },
    { label: 'Editar perfil', link: '/editar-perfil', icon: <CircleUserRound size={20} /> },
    { label: 'Configurações', link: '/configuracoes', icon: <Settings size={20} /> },
];

const ProfileMenu = () => {
    const [isOpen, setIsOpen] = useState(() => {
        const storedState = localStorage.getItem('sidebar_open');
        return storedState ? storedState === 'true' : true;
    });

    useEffect(() => {
        localStorage.setItem('sidebar_open', isOpen);
    }, [isOpen]);

    return (
        <aside
            className={`relative hidden flex-col border-r border-zinc-200 transition-all ease-in-out md:flex ${
                isOpen ? 'w-[300px]' : 'w-[80px]'
            }`}
        >
            <div className="flex w-full items-center justify-center">
                <div className="flex h-20 w-full items-center justify-center">
                    <NavLink to="/">
                        <img src={logo} alt="Logo mentorIA" className="w-30 cursor-pointer lg:w-40" />
                    </NavLink>
                </div>
            </div>
            <div className="flex flex-col space-y-3 px-3 pt-5">
                {menuOptions.map(({ label, link, icon }) => (
                    <NavLink to={link} key={link}>
                        {({ isActive }) => (
                            <Button
                                label={
                                    <div
                                        className={`flex flex-nowrap items-center gap-2 overflow-hidden text-ellipsis ${isOpen ? '' : 'hidden'}`}
                                    >
                                        <span className="whitespace-nowrap">{label}</span>
                                    </div>
                                }
                                icon={icon}
                                variant="tertiary"
                                className={`flex w-full ${isOpen ? 'justify-start px-3' : 'justify-center px-0'} ${isActive ? '!bg-blue-600 text-white' : ''} `}
                            />
                        )}
                    </NavLink>
                ))}
            </div>

            <div className="absolute right-[-40px] bottom-2 z-[9999px] flex">
                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="cursor-pointer rounded-r-md bg-gray-200 p-2 transition"
                >
                    <ChevronLast
                        className={`text-zinc-400 transition-transform duration-300 ${!isOpen ? 'rotate-180' : ''}`}
                    />
                </button>
            </div>
            {/* Botão de Logout */}
            <div className="px-4">
                <div className="mt-5 border-t border-zinc-200 pt-5">
                    <NavLink to="/logout">
                        <Button
                            label={isOpen ? 'Sair' : ''}
                            icon={<LogOut size={20} />}
                            variant="tertiary"
                            className="flex w-full justify-center overflow-hidden !bg-red-600 text-center text-white"
                        />
                    </NavLink>
                </div>
            </div>
        </aside>
    );
};

export default ProfileMenu;
