import React from 'react';
import { Cards } from '../components/Cards';
import discover from '../assets/discover.svg';
import read from '../assets/read.svg';
import circle from '../assets/circle.svg';
import { CircleCheckBig } from 'lucide-react';

const cards = [
    {
        title: 'Evolua mais rápido com um plano sob medida.',
        icon: discover,
        text: 'Você recebe um plano personalizado, criado de acordo com seu nível atual e seus objetivos de carreira. Assim, você elimina distrações, evita conteúdos desnecessários e foca no que realmente acelera sua evolução.',
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
        <section className="mx-auto my-20 max-w-7xl px-5 py-20">
            <div className="min-w-1/2">
                <div className="items-left flex flex-col-reverse justify-between gap-4 md:flex-row">
                    <h2 className="font-outfit text-5xl font-light text-blue-600">Por que usar o mentorIA ?</h2>
                    <div className="flex h-8 w-fit items-center justify-center gap-3 rounded-full border border-blue-600 bg-blue-50 px-8 text-sm font-normal text-blue-600">
                        <CircleCheckBig size={14} />
                        <span className="text-xs">Pronto para o mercado</span>
                    </div>
                </div>
                <div className="text-regular my-20 flex items-center justify-center text-left md:gap-30">
                    <p className="w-full text-left text-sm text-zinc-500 sm:text-center md:w-2/3">
                        O MentorIA foi criado para eliminar a frustração de buscar crescimento na carreira sem ter
                        clareza dos próximos passos. Mais do que um sistema, ele é o seu guia inteligente para acelerar
                        sua evolução profissional.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 grid-rows-3 gap-5 lg:grid-cols-3 lg:grid-rows-1 lg:divide-x lg:divide-solid lg:divide-black/10 lg:px-0 lg:pt-0">
                {cards.map((card) => (
                    <Cards title={card.title} icon={card.icon} text={card.text} />
                ))}
            </div>
        </section>
    );
};

export default Features;
