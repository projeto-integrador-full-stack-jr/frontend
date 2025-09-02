import React from 'react';
import { Cards } from '../components/Cards';
import discover from '../assets/discover.svg';
import read from '../assets/read.svg';
import circle from '../assets/circle.svg';

const cards = [
  {
    title: 'Evolua mais rápido com um plano sob medida.',
    icon: discover,
    text: 'Na MentoriaIA você recebe um plano personalizado, criado de acordo com seu nível atual e seus objetivos de carreira. Assim, você elimina distrações, evita conteúdos desnecessários e foca no que realmente acelera sua evolução.',
  },
  {
    title: 'Tenha apoio real, não só conteúdos soltos',
    icon: read,
    text: 'Imagine ter respostas instantâneas para suas dúvidas, feedback direcionado para o seu currículo e exercícios que realmente fazem diferença no seu crescimento profissional.',
  },
  {
    title: 'Foque no que o mercado realmente exige',
    icon: circle,
    text: ' Chega de perder tempo com conteúdos que não fazem diferença na sua contratação. Na MentoriaIA você recebe um plano de estudos guiado para aprender exatamente as habilidades e práticas que as empresas procuram hoje.',
  },
];

const Features = () => {
  return (
    <section className="h-screen">
      <div className="w-1/2 px-20">
        <div className="mb-12 w-fit rounded-full bg-[#2C49FA] px-12 py-1 text-white">
          Pronto para o mercado
        </div>
        <h1 className="pb-12 text-5xl font-extrabold text-[#3F3D56]">
          Por que usar o mentorIA
        </h1>
        <p className="pb-12 text-lg">
          O MentorIA foi criado para eliminar a frustração de buscar crescimento
          na carreira sem ter clareza dos próximos passos. Mais do que um
          sistema, ele é o seu guia inteligente para acelerar sua evolução
          profissional.
        </p>
      </div>

      <div className="mx-30 grid grid-rows-4 gap-8 lg:grid-cols-3 lg:grid-rows-1 lg:p-5">
        {cards.map((card) => (
          <Cards title={card.title} icon={card.icon} text={card.text} />
        ))}
      </div>
    </section>
  );
};

export default Features;
