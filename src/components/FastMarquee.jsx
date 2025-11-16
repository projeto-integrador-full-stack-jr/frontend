import React from 'react';
import Marquee from 'react-fast-marquee';
import codifica from '../assets/codifica.svg';
import trindtech from '../assets/trindtech.svg';
import google from '../assets/google_logo.svg';
import nubank from '../assets/nubank.svg';
import sicredi from '../assets/sicredi.svg';
import south_system from '../assets/south_system.svg';
import plus_prati from '../assets/+prati.svg';
import Button from './Button';

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
        name: '+PraTi',
        image: plus_prati,
        link: 'https://www.maisprati.com.br/',
    },
];

const FastMarquee = () => {
    return (
        <div className="my-20 w-full py-20">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto flex w-full flex-col space-y-10 px-8 lg:items-baseline lg:justify-between lg:px-0">
                    <h1 className="font-outfit text-2xl leading-6 font-bold text-blue-600">
                        Veja as empresas <br /> onde alguns dos mentorados trabalham
                    </h1>
                    <p className="text-sm text-zinc-500">
                        O aprendizado e a busca por evolução se transforma em oportunidades reais em empresas
                        reconhecidas
                    </p>
                </div>
                <Marquee
                    pauseOnHover={true}
                    speed={40}
                    className="mt-10 border-r border-b-0 border-l border-zinc-100 shadow-[inset_0px_0_1px_rgba(0,0,0,0.01),inset_-5px_0_20px_rgba(0,0,0,.01)]"
                >
                    {' '}
                    {companies.map((company) => (
                        <div key={company.name} className="overflow-hidden px-10">
                            {' '}
                            <a href={company.link} target="_blank" rel="noreferrer">
                                {' '}
                                <img
                                    src={company.image}
                                    alt={company.name}
                                    title={company.name}
                                    className="w-40 cursor-pointer transition duration-300 ease-in-out hover:scale-105"
                                />{' '}
                            </a>{' '}
                        </div>
                    ))}{' '}
                </Marquee>
            </div>
        </div>
    );
};

export default FastMarquee;
