import React from 'react';
import Marquee from 'react-fast-marquee';
import codifica from '../assets/codifica.svg';
import trindtech from '../assets/trindtech.svg';
import google from '../assets/google.svg';
import nubank from '../assets/nubank.svg';
import sicredi from '../assets/sicredi.svg';
import south_system from '../assets/south_system.svg';

const companies = [
  {
    name: '/Codifica',
    image: codifica,
    link: 'https://www.codificaedu.com.br/',
  },
  {
    name: 'Google',
    image: google,
    link: 'https://google.com.br/',
  },
  {
    name: 'Trindtech',
    image: trindtech,
    link: 'https://trindtech.com.br/',
  },
  {
    name: 'Nubank',
    image: nubank,
    link: 'https://nubank.com.br/',
  },
  {
    name: 'Sicredi',
    image: sicredi,
    link: 'https://sicredi.com.br/',
  },
  {
    name: 'South System',
    image: south_system,
    link: 'https://southsystem.com.br/',
  },
  {
    name: '/Codifica',
    image: codifica,
    link: 'https://www.codificaedu.com.br/',
  },
];

const FastMarquee = () => {
  return (
    <div className="mx-8 my-10 lg:mx-20">
      <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between">
        <h1 className="b-20 text-2xl font-extrabold text-[#3F3D56] lg:w-1/4 lg:text-3xl">
          Veja as empresas onde alguns dos mentoradosIA trabalham
        </h1>
        <p className="pt-6 text-sm font-light text-zinc-400 lg:w-1/4 lg:text-lg">
          O aprendizado e a busca por evolução se transforma em oportunidades
          reais em empresas reconhecidas
        </p>
      </div>
      <Marquee pauseOnHover={true} speed={20}>
        {companies.map((company) => (
          <div key={company.name} className="px-16">
            <a href={company.link} target="_blank" rel="noreferrer">
              <img
                src={company.image}
                alt={company.name}
                title={company.name}
                className="h-50 w-40 cursor-pointer transition duration-300 ease-in-out hover:scale-105"
              />
            </a>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default FastMarquee;
