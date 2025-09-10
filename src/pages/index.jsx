import logo from '../assets/logo.svg';
import Button from '../components/Button';
import About from '../sections/about';
import Features from '../sections/Features';
import FastMarquee from '../components/FastMarquee';
import Email from '../sections/Email';
import Footer from '../components/Footer';
import Faq from '../components/Faq';

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full">
      <header className="flex justify-center pt-2 lg:mx-20 lg:items-center lg:justify-between">
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
              <h1 className="text-5xl leading-tight font-extrabold text-[#0046BC] sm:text-4xl lg:text-7xl">
                Mentoria objetiva <br /> para a sua evolução profissional 🚀
              </h1>
              <p className="min-w-3/4 pt-6 text-sm font-light text-zinc-400 lg:w-3/4">
                Com recursos intuitivos, dashboards claros e acompanhamento pe
                jornrsonalizado, você tem tudo em um só lugar para evoluir na
                sua jornada.
              </p>
            </div>

            <div className="mt-6 flex gap-4 lg:mt-10">
              <Button label="Saiba Mais" style="outline" />
              <Button label="Começar Agora" style="primary" />
            </div>
          </div>
        </section>
        <About />
        <Features />
        <Email />
        <FastMarquee />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
