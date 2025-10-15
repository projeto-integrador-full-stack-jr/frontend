import { Link } from 'react-router-dom';
// imgs
import choose from '../assets/choose.svg';
import user_account from '../assets/user-account.svg';
import hire from '../assets/hire.svg';
import avatar from '../assets/avatar.png';
// import resume from '../assets/resume.png';
// import resume_result from '../assets/resume_result.png';

// components
import Header from '../components/Header';
import FastMarquee from '../components/FastMarquee';
import Button from '../components/Button';
import Footer from '../components/Footer';

// sections
import About from '../sections/About';
import Features from '../sections/Features';
import Contact from '../sections/Contact';
import Faq from '../sections/Faq';

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
      <Header />
      <main>
        <section id="home" className="flex h-screen items-center justify-start">
          <div className="px-6 lg:px-78">
            <div className="min-w-1/2 lg:w-2/3">
              <h1 className="bg-gradient-to-r from-[#2C49FA] via-[#8192FC] to-[#8594f5] bg-clip-text text-6xl leading-tight font-extrabold text-transparent sm:text-5xl lg:text-7xl">
                Mentoria objetiva <br /> para a sua evolução profissional{'  '}
                <span className="text-black">🚀</span>
              </h1>
              <p className="min-w-3/4 pt-6 text-xl font-light text-zinc-500 lg:w-3/4">
                Conte com orientação direta <br /> para alcançar seus objetivos
                profissionais.
              </p>
            </div>

            <div className="mt-6 flex gap-4 lg:mt-6">
              <Link to={'/'}>
                <Button label="Eu quero uma mentoria" variant="primary" />
              </Link>
              <Link to={''}>
                <Button label="Saiba Mais" variant="secondary" />
              </Link>
            </div>
            <div className="flex items-center gap-5 pt-12">
              <img src={avatar} alt="avatares" />
              <p className="text-lg leading-5 font-light">
                Mais de +1000 usuários <br /> evoluíram profissionalmente
              </p>
            </div>
          </div>
        </section>
        <About />
        <Features />
        <Contact />
        <section className="px-8 lg:my-30 lg:px-70">
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
                <h2 className="pb-4 text-2xl font-bold">{img.title}</h2>
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
