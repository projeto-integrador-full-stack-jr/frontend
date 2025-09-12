import React from 'react';
import robot from '../assets/robot.svg';

const About = () => {
  return (
    <section id="about" className="relative flex min-h-screen items-center">
      <div className="absolute top-0 left-0 h-40 w-full bg-[#2C49FA]"></div>

      <div className="mt-60 min-w-1/2 px-8 sm:mt-90 lg:mt-0 lg:w-1/2 lg:px-20">
        <h2 className="pb-20 text-5xl font-extrabold text-[#3F3D56] lg:mt-30">
          Sobre o mentorIA
        </h2>
        <p className="pb-4 text-lg">
          Na MentorIA, você recebe uma orientação profissional direta e
          personalizada, criada a partir das suas respostas sobre experiência,
          objetivos de carreira e conhecimentos atuais.
        </p>
        <p className="text-lg">
          Com o apoio de inteligência artificial, nosso sistema gera um plano de
          mentoria objetivo, com passos práticos e sugestões relevantes para sua
          evolução, oferecendo direcionamento claro e alinhado às suas metas
          profissionais. Além disso, você pode salvar suas mentorias e
          acompanhar sua evolução ao longo do tempo, sempre com foco no que
          realmente importa: o seu crescimento profissional.
        </p>
      </div>

      <img
        src={robot}
        alt="robot"
        className="absolute -top-1 right-0 h-1/3 lg:-top-20 lg:h-full"
      />
    </section>
  );
};

export default About;
