import MockupMacBook from '../assets/mockups/macbook.png';

const About = () => {
    return (
        <section id="about" className="relative flex flex-col items-center py-15 lg:py-15">
            <div className="mx-auto max-w-7xl px-4">
                <div>
                    <h2 className="font-outfit text-5xl font-light text-blue-600">Sobre o mentorIA</h2>
                    <h3 className="text-sm text-zinc-500">A plataforma que conecta você à evolução profissional.</h3>
                </div>
                <div className="items-center justify-center gap-10 text-zinc-500 md:flex md:w-full">
                    <div className="space-y-8 sm:w-full md:w-full">
                        <p className=" ">
                            Na MentorIA, você recebe uma orientação profissional direta e personalizada, criada a partir
                            das suas respostas sobre experiência, objetivos de carreira e conhecimentos atuais.
                        </p>
                        <p className=" ">
                            Com o apoio de inteligência artificial, nosso sistema gera um plano de mentoria objetivo,
                            com passos práticos e sugestões relevantes para sua evolução, oferecendo direcionamento
                            claro e alinhado às suas metas profissionais. Além disso, você pode salvar suas mentorias e
                            acompanhar sua evolução ao longo do tempo, sempre com foco no que realmente importa: o seu
                            crescimento profissional.
                        </p>
                    </div>
                    <div className="mt-20 w-full md:max-w-1/2">
                        <img src={MockupMacBook} alt="" className=" " />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
