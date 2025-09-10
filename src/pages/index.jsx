import logo from '../assets/logo.svg';
import Button from '../components/Button';
import About from '../sections/about';
import Features from '../sections/Features';
import FastMarquee from '../components/FastMarquee';
import Email from '../sections/Email';
import Footer from '../components/Footer';
import Faq from '../components/Faq';
import choose from '../assets/choose.svg';
import user_account from '../assets/user-account.svg';
import hire from '../assets/hire.svg';

const imgs = [
  {
    img: user_account,
    title: 'Criação de conta',
    text: 'Crie sua conta em poucos cliques e tenha acesso à sua área exclusiva, onde poderá salvar e acompanhar suas mentorias.',
  },
  {
    img: choose,
    title: 'Questionário',
    text: 'Responda a um breve questionário sobre sua experiência, metas e conhecimentos. Essas informações serão a base para gerar sua mentoria personalizada.',
  },
  {
    img: hire,
    title: 'Sua mentoria',
    text: 'Receba um plano objetivo e prático de desenvolvimento profissional, com recomendações claras e direcionadas ao seu crescimento.',
  },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full">
      <header className="flex justify-center border-b border-gray-300 px-4 py-6 lg:mx-20 lg:items-center lg:justify-between">
        <img
          src={logo}
          alt="Logo mentorIA"
          className="w-50 cursor-pointer"
          onClick={''}
        />

        <ul className="hidden lg:flex lg:gap-4 lg:text-black">
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

        <div className="hidden lg:flex lg:gap-4">
          <Button label="Entrar" style="outline" />
          <Button label="Criar Conta" style="primary" />
        </div>
      </header>
      <main>
        <section className="flex h-screen items-center justify-start px-6 lg:px-20">
          <div>
            <div className="min-w-1/2 lg:w-2/3">
              <div></div>
              <h1 className="bg-gradient-to-r from-[#2C49FA] via-[#8192FC] to-[#8594f5] bg-clip-text text-6xl leading-tight font-extrabold text-transparent sm:text-5xl lg:text-8xl">
                Mentoria objetiva <br /> para a sua evolução profissional{'  '}
                <span className="text-black">🚀</span>
              </h1>
              <p className="min-w-3/4 pt-6 text-lg font-light text-zinc-500 lg:w-3/4">
                Conte com orientação direta para alcançar seus objetivos
                profissionais.
              </p>
            </div>

            <div className="mt-6 flex gap-4 lg:mt-10">
              <Button label="Eu quero uma mentoria" style="primary" />
              <Button label="Saiba Mais" style="outline" />
            </div>
          </div>
        </section>
        <About />
        <Features />
        <Email />
        <section className="lg:my-30">
          <div className="pb-12 text-center">
            <h2 className="pb-4 text-4xl font-extrabold text-[#3F3D56] lg:text-5xl">
              Como utilizar a mentorIA ?
            </h2>
            <p>
              Entenda seus direitos de forma simplificada e de fácil
              compreensão.
            </p>
          </div>

          <div className="grid grid-rows-3 gap-5 lg:grid-cols-3 lg:grid-rows-1">
            {imgs.map((img) => (
              <div className="place-items-center p-12 text-center">
                <h1 className="pb-4 text-2xl font-bold">{img.title}</h1>
                <p className="pb-6 font-light">{img.text}</p>
                <img src={img.img} width={300} />
              </div>
            ))}
          </div>
        </section>
        <FastMarquee />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
