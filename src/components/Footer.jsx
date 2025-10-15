import React from 'react';
import logo from '../assets/logo_footer.png';
import instagram from '../assets/instagram_before.svg';
import linkedin from '../assets/linkedin_before.svg';
import youtube from '../assets/youtube_before.svg';
import x from '../assets/x_before.svg';
import facebook from '../assets/facebook_before.svg';
import Email from './Email';

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
    <footer
      id="contact"
      className="grid min-h-70 w-full grid-cols-1 items-center bg-[#2C49FA] p-6 text-white lg:flex lg:flex-row lg:items-center lg:justify-between lg:px-78"
    >
      <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
        <img
          src={logo}
          alt="logo"
          className="w-60 cursor-pointer"
          onClick={''}
        />
        <p className="pt-10 text-sm font-light text-white/50">
          © {new Date().getFullYear()} mentorIA. Todos os direitos reservados.
        </p>
      </div>

      <div className="order-1 lg:order-2">
        <Email
          label={'Preencha seu e-mail para receber atualizações'}
          button_label={'Inscrever-se'}
          placeholder={'Digite seu e-mail...'}
        />

        <div className="flex flex-row items-center justify-between py-7">
          <a href="#" className="font-light text-white/50 hover:text-white/30">
            Política de Privacidade
          </a>

          <div className="flex gap-2">
            {socials.map((social) => (
              <a href={social.link} target="_blank" rel="noreferrer">
                <img
                  src={social.icon}
                  alt={social.link}
                  width={25}
                  className="transition duration-100 ease-in-out hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
