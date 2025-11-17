import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Bot, FileUser, BriefcaseBusiness, CircleUserRound, Goal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../contexts/resume/ResumeContext';
import { UserServices } from '@services';
import { ToastContainer, toast } from 'react-toastify';
import LoadingScreen from '../components/Loading';

const Overview = () => {
    const [profile, setProfile] = useState(null);
    const { resumeData, setResumeData } = useResume();
    const [isCreatingSummary, setisCreatingSummary] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadProfile() {
            try {
                const data = await UserServices.profileService.getProfile();
                setProfile(data);
            } catch (error) {
                console.error(error);
            }
        }
        loadProfile();
    }, []);

    const createResume = async () => {
        setisCreatingSummary(true);
        try {
            const data = await UserServices.summaryService.createSummary();
            setResumeData(data);
            toast.success('Resumo gerado com sucesso!');
            navigate('/meu-resumo');
            return data;
        } catch (error) {
            console.error('Erro ao gerar resumo:', error);
            toast.error('Falha ao gerar resumo');
            setisCreatingSummary(false);
        }
    };

    return (
        <div className="flex min-h-screen flex-col justify-between">
            <Header />
            <main className="flex-1">
                <section className="relative">
                    <article className="p-4">
                        <div className="mx-auto -mt-4 flex h-full w-full max-w-2xl flex-col gap-8 rounded-b-2xl bg-white p-6 font-outfit text-[#6D7895] shadow lg:p-10">
                            <div className="flex flex-col justify-between space-y-2 sm:flex-row">
                                <div className="flex flex-col items-start space-y-2">
                                    <div className="flex items-center justify-center gap-1 text-sm">
                                        <p className="text-3xl font-bold text-zinc-800"> {profile?.nomeUsuario}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-zinc-800">Cargo atual: </span>
                                        <p className="text-sm text-zinc-500">{profile?.cargo}</p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-start space-y-2">
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-zinc-800">Tempo de experiência: </span>
                                        <p className="text-sm text-zinc-500">{profile?.experiencia}</p>
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                        <span className="mr-1 font-semibold text-zinc-800">Carreira:</span>
                                        <p className="text-sm text-zinc-500">{profile?.carreira}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t-1 py-5">
                                <span className="font-semibold text-zinc-800">Objetivo: </span>
                                <p className="block">{profile?.objetivoPrincipal}</p>
                            </div>

                            <div className="flex w-full flex-col items-center rounded-md bg-gray-100 p-2 sm:flex-row">
                                <button
                                    onClick={() => navigate('/criar-perfil')}
                                    type="button"
                                    className={
                                        isCreatingSummary
                                            ? 'hidden'
                                            : 'w-full cursor-pointer rounded-md py-2.5 text-center text-sm font-semibold transition-colors'
                                    }
                                >
                                    voltar
                                </button>

                                {isCreatingSummary ? (
                                    <div className="flex w-full items-center justify-center">
                                        <LoadingScreen text={'Aguarde, estamos criando sua mentoria'} />
                                    </div>
                                ) : (
                                    <button
                                        onClick={async () => {
                                            await createResume();
                                        }}
                                        type="button"
                                        className="flex w-full cursor-pointer items-center justify-center rounded-md bg-blue-600 py-2.5 text-center text-sm font-semibold text-zinc-100 transition-colors"
                                    >
                                        Gerar mentoria com IA <Bot size={24} className="ml-2" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </article>
                </section>
            </main>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Overview;
