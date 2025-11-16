import { Link } from 'react-router-dom';
import Button from '../components/Button';
import avatar from '../assets/avatar.png';

const HeroSection = () => {
    return (
        <section id="home" className="flex min-h-screen w-full items-center justify-center px-5 md:min-h-screen">
            <div className="max-w-6xl text-center">
                <div className="space-y-4">
                    <h1 className="font-outfit text-5xl font-bold text-blue-600 md:text-7xl">
                        Mentoria objetiva para a sua{' '}
                        <span className="relative !font-clash !font-normal italic">evolução profissional </span>
                    </h1>
                    <p className="font-outfit font-light text-zinc-600">
                        Conte com orientação direta para alcançar seus objetivos profissionais.
                    </p>
                    <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link to={'/'}>
                            <Button label="Mentoria profissional" variant="primary" className={'!w-full'} />
                        </Link>
                        <Link to={''}>
                            <Button label="Saiba Mais" variant="secondary" />
                        </Link>
                    </div>
                </div>

                <div className="">
                    <div className="mt-20 flex flex-col items-center justify-center gap-4 text-center">
                        <img src={avatar} alt="avatares" />
                        <p className="font-regular text-center text-sm text-zinc-500">
                            Mais de <span className="font-bold text-blue-600">+100</span> usuários evoluíram
                            profissionalmente
                        </p>
                        <div className="mt-6 flex justify-center">
                            <div className="animate-bounce">
                                <svg
                                    className="h-8 w-8 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
