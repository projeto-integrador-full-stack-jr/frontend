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
const HowToUseMentoria = () => {
    return (
        <section className="mx-auto my-15 max-w-6xl px-5 py-15">
            <div className="">
                <h2 className="pb-4 font-outfit text-5xl font-light text-blue-600">Como utilizar o mentorIA ?</h2>
                <p className="text-zinc-500">Veja como navegar e utilizar o mentorIA com facilidade.</p>
            </div>

            <div className="mt-20 grid grid-rows-3 gap-20 lg:grid-cols-3 lg:grid-rows-1">
                {imgs.map((img) => (
                    <div className="space-y-4 text-left">
                        <div className="flex h-24 items-center justify-center rounded-md py-20">
                            <img src={img.img} width={150} />
                        </div>
                        <h2 className="text-center text-xl font-bold">{img.title}</h2>
                        <p className="font-regular text-center text-sm text-zinc-500">{img.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowToUseMentoria;
