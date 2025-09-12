import React from 'react';
import logo from '../assets/logo.svg';
import Button from '../components/Button';

const Header = () => {
  return (
    <header className="flex justify-center border-b border-gray-300 py-6 lg:items-center lg:justify-between">
      <img
        src={logo}
        alt="Logo mentorIA"
        className="w-50 cursor-pointer lg:ml-20"
        onClick={''}
      />

      <ul className="hidden lg:flex lg:gap-8 lg:text-black">
        <li className="hover:text-black/70">
          <a href="#home">Início</a>
        </li>
        <li className="hover:text-black/70">
          <a href="#about">Sobre</a>
        </li>
        <li className="hover:text-black/70">
          <a href="#features">Funcionalidades</a>
        </li>
        <li className="hover:text-black/70">
          <a href="#support">Suporte</a>
        </li>
        <li className="hover:text-black/70">
          <a href="#faq">Dúvidas</a>
        </li>
        <li className="hover:text-black/70">
          <a href="#contact">Contato</a>
        </li>
      </ul>

      <div className="hidden lg:mr-20 lg:flex lg:gap-4">
        <Button label="Fazer login" style="outline" />
        <Button label="Cadastrar" style="primary" />
      </div>
    </header>
  );
};

export default Header;
