import React from 'react';
import logo from '../assets/logo_footer.png';
import instagram from '../assets/instagram_before.svg';
import linkedin from '../assets/linkedin_before.svg';
import youtube from '../assets/youtube_before.svg';
import x from '../assets/x_before.svg';
import facebook from '../assets/facebook_before.svg';
// import Email from './Email';

const socials = [
    {
        icon: instagram,
        link: 'https://www.instagram.com/',
    },
    {
        icon: linkedin,
        link: 'https://www.linkedin.com/',
    },
    {
        icon: youtube,
        link: 'https://www.youtube.com/',
    },
    {
        icon: x,
        link: 'https://twitter.com/',
    },
    {
        icon: facebook,
        link: 'https://www.facebook.com/',
    },
];

const Footer = () => {
    return (
        <footer className="w-full bg-blue-600 py-10 text-white">
            <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-10 px-5 md:flex-row">
                <div className="flex flex-col items-center justify-start gap-5 md:items-center">
                    <img src={logo} alt="logo" className="w-50 cursor-pointer" onClick={''} />
                    <p className="text-sm font-light text-zinc-200">
                        © {new Date().getFullYear()} mentorIA. Todos os direitos reservados.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-5 md:flex-col">
                    <div className="flex gap-2">
                        {socials.map((social) => (
                            <a href={social.link} target="_blank" rel="noreferrer">
                                <img
                                    src={social.icon}
                                    alt={social.link}
                                    width={24}
                                    className="transition duration-100 ease-in-out hover:scale-110"
                                />
                            </a>
                        ))}
                    </div>
                    <a href="#" className="font-light text-white/50 hover:text-white/30">
                        Política de Privacidade
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
